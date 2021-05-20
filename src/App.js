import { createMuiTheme, CssBaseline, MuiThemeProvider } from "@material-ui/core";
import React, { useState, useEffect } from "react"
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Cart } from "./components/Cart";
import { commerce } from './lib/commerce'
import { Navbar } from "./components/Navbar";
import { Checkout } from "./pages/Checkout";

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

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart)

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
          <Route exact path="/checkout">      
            <Checkout cart={cart}/>
          </Route>
        </Switch>
      </Router>
    </MuiThemeProvider>
    
  )
}

export default App;