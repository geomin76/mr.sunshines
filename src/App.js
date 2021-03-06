import { createMuiTheme, CssBaseline, MuiThemeProvider } from "@material-ui/core";
import React, { useState, useEffect } from "react"
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { commerce } from './lib/commerce'
import { Checkout } from "./pages/Checkout";
import { Cart } from "./pages/Cart";
import { Item } from "./pages/Item";
import { PageNotFound } from "./pages/404";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#000000"
    },
    text: {
      primary: "#FFFFFF"
    }
  },
  typography: {
    fontFamily: "Arimo"
  }
})

export const App = () => {
  const [ products, setProducts ] = useState([]);
  const [ cart, setCart ] = useState({});
  const [ order, setOrder ] = useState({});
  const [ errorMessage, setErrorMessage ] = useState('');

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    
    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity, size) => {
    const item = await commerce.cart.add(productId, quantity, size);

    setCart(item.cart)
  }

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
      fetchProducts();
    } catch (error) {
      console.log(error)
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/"> 
            <Home cart={cart}/>
          </Route>
          <Route exact path="/store">
            <Store products={products} addToCart={handleAddToCart} cart={cart}/>
          </Route>    
          <Route exact path="/about">      
            <About cart={cart}/>
          </Route>
          <Route exact path="/contact">      
            <Contact cart={cart}/>
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
          </Route>
          <Route exact path="/checkout">      
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage}/>
          </Route>
          <Route exact path="/item/:id">
            <Item cart={cart} addToCart={handleAddToCart}/>
          </Route>
          <Route component={PageNotFound}/>
        </Switch>
      </Router>
    </MuiThemeProvider>
    
  )
}

export default App;