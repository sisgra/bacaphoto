import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import facebook from '../../facebook.svg';
import instagram from '../../instagram.svg';
import logo_b_biela from './logo_b_biela.png';
import footer from './footer.png'


const useStyles=makeStyles(theme=>({
    footer:{
        opacity:"85%",
        backgroundColor:theme.palette.common.blue,
        width:"100%",
        zIndex:1302,
        position:"relative"
    },
    mainContainer:{
        display:"flex",
        marginTop:"-1em",
        position:"absolute"
    },
    link:{
       
        color:"white",
        fontFamily:"Arial",
        fontSize:"0.75rem",
        fontWeight:"bold",
        textDecoration:"none"
    },
    gridItem:{
        margin:"3em"
    },

    socialContact:{
        position:"absolute",
        marginTop:"-8em",
        right:"1.5em",
        [theme.breakpoints.down("xs")]:{
            right:"0.6em"
        }
    },
    icon:{
        height:"2em",
        width:"2em",
        [theme.breakpoints.down("xs")]:{
            height:"1.5em",
            width:"1.5em"
        }
    },
    footerAdorment:{
        
        

        width:"12em",
        verticalAlignment:"bottom",
        [theme.breakpoints.down("md")]: {
            width:"10em"
        },
        [theme.breakpoints.down("xs")]:{
            width:"8em"
        }
    },

    
}));


export default function Footer(props){
    const classes=useStyles();

    return(
        <footer className={classes.footer}>
            <Hidden mdDown>
            <Grid container justify="center" className={classes.mainContainer}>
            <Grid item className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                    <Grid item component={Link} onClick={()=>props.setValue(0)} to ="/" className={classes.link}>
                    Home
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                    <Grid item component={Link} onClick={()=>{props.setValue(1);props.setSelectedIndex(0)}} to="/services" className={classes.link}>
                    SERVICES
                    </Grid>
                    <Grid item component={Link} onClick={()=>{props.setValue(1);props.setSelectedIndex(1)}} to ="/customsoftware" className={classes.link}>
                    PORTRAITS
                    </Grid>
                    <Grid item component={Link} onClick={()=>{props.setValue(1);props.setSelectedIndex(2)}} to ="/mobileapps" className={classes.link}>
                    THEATER
                    </Grid>
                    <Grid item component={Link} onClick={()=>{props.setValue(1);props.setSelectedIndex(3)}} to ="/websites" className={classes.link}>
                    NATURE
                    </Grid>
                    <Grid item component={Link} onClick={()=>{props.setValue(1);props.setSelectedIndex(4)}} to ="/websites" className={classes.link}>
                    CITY
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                    <Grid item component={Link} onClick={()=>props.setValue(0)} to ="/" className={classes.link}>
                    PORTFOLIO
                    </Grid>
                </Grid>
                <Grid container direction="column" spacing={2}>
                    <Grid item component={Link} onClick={()=>props.setValue(0)} to ="/" className={classes.link}>
                    ABOUT
                    </Grid>
                </Grid>
                <Grid container direction="column" spacing={2}>
                    <Grid item component={Link} onClick={()=>props.setValue(0)} to ="/" className={classes.link}>
                    NEWS
                    </Grid>
                </Grid>
            </Grid>
            </Grid>
            </Hidden>
            <img 
            alt="black decorative slash" 
            src={logo_b_biela} 
            className={classes.footerAdorment} 
            />
               
            
        <Grid container justify="flex-end" spacing={2} className={classes.socialContact}>
            <Grid item component={"a"} href="http://www.facebook.com" rel="noopener noreferrer" target="_blank">
                <img alt="facebook logo" src={facebook} className={classes.icon}/>
            </Grid>
            <Grid item component={"a"} href="http://www.instagram.com" rel="noopener noreferrer" target="_blank">
                <img alt="instagram logo" src={instagram} className={classes.icon}/>
            </Grid>
        </Grid>
        </footer>
    )
}