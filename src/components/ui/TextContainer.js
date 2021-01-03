import React from 'react';
import Typography from '@material-ui/core/Typography';
import {ThemeProvider} from '@material-ui/styles';
import { makeStyles } from '@material-ui/core';
import theme from './Theme'
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

const latest="News"
const heading ="MY WORK";
const name="Martin Bača";
const text="Photography is All About Light, Composition, and Most Importantly Emotion. Creating a timeless look, coupled with a flawless moment.If a picture is worth a thousand words, what’s a talking picture worth? Ready. Set. Wow! Every picture tells a story. Let me help you tell yours. ";
const useStyles=makeStyles(theme=>({
  textbox:{
     paddingTop: 120,  
  },

  heading:{
    fontFamily:"Dancing Script",
    [theme.breakpoints.down("md")]: {
      fontSize:"3rem"
  },
  [theme.breakpoints.down("sm")]: {
    fontSize:"2rem"
},
},

text:{
  fontFamily:"Dancing Script",
  
  [theme.breakpoints.down("sm")]: {
    fontSize:"0.5rem"
},
  paddingLeft:230,
  [theme.breakpoints.down("sm")]: {
    paddingLeft:80,
    paddingRight:80
},
  paddingRight:230,
  
},
latest:{
  fontFamily:"Dancing Script",
  paddingTop:70,
  fontSize:"3rem",
  
  
},
name:{
  fontFamily:"Dancing Script",
  fontWeight:"700",
  paddingLeft:"2rem",
  paddingBottom:"10rem"
  
}
}))

export default function TextContainer() {
  const classes=useStyles();
    return (
     <div className={classes.textbox}>
       <ThemeProvider theme={theme} >
         <Typography className={classes.heading} variant="h1"   align="center" gutterBottom>{heading}</Typography>
         <Typography className={classes.text} variant="subtitle1" align="center" gutterBottom>{text}</Typography>
         
         <Box className={classes.name} fontStyle="oblique" align="center">{name}</Box>
         <Divider variant="middle" />
         <Box className={classes.latest}  align="center" >{latest}</Box>
         
       </ThemeProvider>
     </div>
    )};