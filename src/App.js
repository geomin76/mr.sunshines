import { createMuiTheme, CssBaseline, MuiThemeProvider } from "@material-ui/core";
import React, { useState, useEffect } from "react"
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { commerce } from './lib/commerce'
import { Navbar } from "./components/Navbar";
import { Checkout } from "./pages/Checkout";
import { Cart } from "./pages/Cart";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#1A1A1D"
    },
    text: {
      primary: "#FFFFFF"
    }
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

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

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
    } catch (error) {
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
        </Switch>
        <Switch>
          <Route exact path="/store">
            <Store products={products} addToCart={handleAddToCart} cart={cart}/>
          </Route>      
        </Switch>
        <Switch>
          <Route exact path="/about">      
            <About cart={cart}/>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/cart">
            <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/checkout">      
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage}/>
          </Route>
        </Switch>
      </Router>
    </MuiThemeProvider>
    
  )
}

export default App;