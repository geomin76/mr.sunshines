import { createMuiTheme, CssBaseline, MuiThemeProvider } from "@material-ui/core";
import React from "react"
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";

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
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />      
        </Switch>
        <Switch>
          <Route exact path="/store" component={Store} />      
        </Switch>
        <Switch>
          <Route exact path="/about" component={About} />      
        </Switch>
      </Router>
    </MuiThemeProvider>
    
  )
}

export default App;