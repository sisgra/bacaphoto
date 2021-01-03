import React,{useState} from 'react';
import Header from './components/ui/Header';
import {ThemeProvider} from '@material-ui/styles';
import theme from './components/ui/Theme'
import {makeStyles} from "@material-ui/core/styles";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Container from './components/ui/container'
import Footer from './components/ui/Footer'
import TextContainer from './components/ui/TextContainer';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';


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
  const [selectedIndex,setSelectedIndex]=useState(0);
  const [value,setValue]=useState(0);

  return (
    <div className={classes.root}>
      
    <ThemeProvider theme={theme} >
        
        <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}>
        <Switch>
          <Route exact path="/" component={()=> <div>Home</div>}/>

          <Route exact path="/services" component={()=> <div>SERVICES</div>}/>
          <Route exact path="/portfolio" component={()=> <div>PORTFOLIO</div>}/>
          <Route exact path="/about" component={()=> <div>ABOUT</div>}/> 
          <Route exact path ="/rating" component={()=> <div>RATING</div>}/>
          <Route exact path ="/addrating" component={()=> <div> ADD RATING</div>}/>
        </Switch>
        </Header>
        <TextContainer></TextContainer>
        <Container></Container>
        <main>
        <SecureRoute exact path="/addrating" component={()=>'Rating Page'} />
        <Route path="/implicit/callback" component={ImplicitCallback} />
        </main>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}></Footer>
        
        </BrowserRouter>
        
        </ThemeProvider>
        
    </div>
  );
}

export default App;
