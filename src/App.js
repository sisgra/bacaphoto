import React from 'react';
import Header from './components/ui/Header';
import {ThemeProvider} from '@material-ui/styles';
import theme from './components/ui/Theme'
import {makeStyles} from "@material-ui/core/styles";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Container from './components/ui/container'




const useStyles=makeStyles((theme)=> ({
  root:{
    minHeight:"100vh",
    backgroundImage:`url("/bckg.jpg")`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
  },
}));


function App() {
  const classes=useStyles()

  return (
    <div className={classes.root}>
      
    <ThemeProvider theme={theme} >
        <div>
        <BrowserRouter>
        <Header>
        <Switch>
          <Route exact path="/" component={()=> <div>Home</div>}/>
          <Route exact path="/services" component={()=> <div>SERVICES</div>}/>
          <Route exact path="/portfolio" component={()=> <div>PORTFOLIO</div>}/>
          <Route exact path="/about" component={()=> <div>ABOUT</div>}/>      
        </Switch>
        </Header>
        </BrowserRouter>
        </div>
        <div>
          <h3>Photography</h3>
        </div>
    </ThemeProvider>
    </div>
  );
}

export default App;
