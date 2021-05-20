import { createMuiTheme, CssBaseline, MuiThemeProvider } from "@material-ui/core";
import React from "react"
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { useState } from "react";
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
  const [products, setProducts] = useState([]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />      
        </Switch>
        <Switch>
          <Route exact path="/store">
            <Store/>
          </Route>      
        </Switch>
        <Switch>
          <Route exact path="/about" component={About} />      
        </Switch>
        <Switch>
          <Route exact path="/cart">
            <Cart />
          </Route>      
        </Switch>
      </Router>
    </MuiThemeProvider>
    
  )
}

export default App;