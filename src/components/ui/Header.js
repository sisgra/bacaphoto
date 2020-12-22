import React,{useState,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import {useMemo} from 'react';
/*centered tabs */
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';

/*list overview */ 
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

/*elevation scrool for appbar*/ 
function ElevationScroll(props) {
    const { children } = props;
   
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const useStyles=makeStyles(theme=>({
    tabs:{
        flexGrow:1,
    },

    toolbarMargin:{
        ...theme.mixins.toolbar,
        marginBottom:"3em"
    },
    drawerIconContainer:{
        
        marginLeft:"auto",
        "&hover":{
            backgroundColor:"transparent"
        }
  },
  drawer: {
    backgroundColor:theme.palette.common.blue
},
drawerItem:{
    ...theme.typography.tab,
    color:"white",
    opacity: 0.7
}
}))


export default function Header (props){
    const classes=useStyles();
    const theme=useTheme();
    const[value,setValue]=React.useState(0);

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [openDrawer,setOpenDrawer]=useState(false)
    const matches=useMediaQuery(theme.breakpoints.down("md"))


    const [selectedIndex,setSelectedIndex]=useState(0)
    
    const handleChange=(event,newValue)=>{
        setValue(newValue);
    };

    
    const routes =[{name:"Home", link:"/", activeIndex:0},
    {name:"Services",link:"/services",activeIndex:1},
    {name:"Portfolio",link:"/portfolio",activeIndex:2},
    {name:"About", link:"/about",activeIndex:3}
    ];


    const drawer =(
        <React.Fragment>
            <SwipeableDrawer 
                disableBackdropTransition={!iOS} 
                disableDiscovery={iOS} 
                open={openDrawer} 
                onClose={()=>setOpenDrawer(false)} 
                onOpen={()=>setOpenDrawer(true)}
                classes={{paper: classes.drawer }}
                >
                <List>
                    <ListItem onClick={()=>{ setOpenDrawer(false);setValue(0)}} divider button component={Link} to="/" selected={value===0}>
                        <ListItemText className={value===0 ?[classes.drawerItem,classes.drawerItemSelected]:classes.drawerItem} disableTypography>Home</ListItemText>
                    </ListItem>
                    <ListItem onClick={()=>{ setOpenDrawer(false);setValue(1)}} divider button component={Link} to="/services" selected={value===1}>
                        <ListItemText className={value===1 ?[classes.drawerItem,classes.drawerItemSelected]:classes.drawerItem} disableTypography>Services</ListItemText>
                    </ListItem>
                    <ListItem onClick={()=>{ setOpenDrawer(false);setValue(2)}} divider button component={Link} to="/revolution" selected={value===2} >
                        <ListItemText className={value===2 ?[classes.drawerItem,classes.drawerItemSelected]:classes.drawerItem} disableTypography>Portfolio</ListItemText>
                    </ListItem>
                    <ListItem onClick={()=>{ setOpenDrawer(false);setValue(3)}} divider button component={Link} to="/about" selected={value===3}>
                        <ListItemText className={value===3 ?[classes.drawerItem,classes.drawerItemSelected]:classes.drawerItem} disableTypography>About</ListItemText>
                    </ListItem>     
                </List>
                </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} onClick={()=>setOpenDrawer(!openDrawer)}
            disableRipple>
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
            
        </React.Fragment>
    )
    useEffect(()=>{
        [...routes].forEach(route=>{
            switch(window.location.pathname){
                case`${route.link}`:
                    if(value!== route.activeIndex) {
                        setValue(route.activeIndex)
                        if (route.selectedIndex && route.selectedIndex!==selectedIndex){
                            setSelectedIndex(route.selectedIndex)
                        }
                    }
                break;
            default:
        break;
    }
    })
    },[value,selectedIndex,routes]);

    const tabs=(
        <React.Fragment>
            <Paper elevation={0} className={classes.tabs} >
                            <Tabs 
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                centered
                            >
                                <Tab className={classes.tab} component={Link} to="/" label="HOME"/>
                                <Tab component={Link} to="/services" label="SERVICES"/>
                                <Tab component={Link} to="/portfolio" label="PORTFOLIO"/>
                                <Tab component={Link} to="/about" label="ABOUT"/>
                            </Tabs>
                            
                        </Paper>
        </React.Fragment>
    )
/*elevation =0 disable borders*/
    return(
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" color="secondary">
                    <Toolbar>
                        {matches ? drawer:tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </React.Fragment>
    );
}