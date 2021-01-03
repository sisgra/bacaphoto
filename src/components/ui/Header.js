import React,{useState,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from "react-router-dom";

/*centered tabs */
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import {useMemo} from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
},
text:{
    textAlign:'center'
},
menu:{
    backgroundColor:theme.palette.common.orange,
    color:theme.palette.common.blue,
    borderRadius:"0px"
},
menuItem:{
    ...theme.typography.tab,
    opacity:0.7,
    "&:hover":{
        opacity:1
    }
},
}))


export default function Header (props){
    const classes=useStyles();
    const theme=useTheme();
    

    

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [openDrawer,setOpenDrawer]=useState(false)
    const matches=useMediaQuery(theme.breakpoints.down("md"))


    
    
    

    const[anchorEl,setAnchorEl]=useState(null)
    const[openMenu,setOpenMenu]=useState(false)


    const handleChange=(e,newValue)=>{
        props.setValue(newValue);
    }

    const handleClick=(e)=>{
        setAnchorEl(e.currentTarget)
        setOpenMenu(true)
    }

    const handleClose=(e)=>{
        setAnchorEl(null)
        setOpenMenu(false)
    };

    const handleMenuItemClick= (e,i)=> {
        setAnchorEl(null);
        setOpenMenu(false);
        props.setSelectedIndex(i)
    };

    const menuOptions=[
        {name:"Rating", link:"/rating",activeIndex:4, selectedIndex:0},
        {name:"Rating Page",link:"/ratingpage",activeIndex:4, selectedIndex:1},
        {name:"Add Rating",link:"/addrating",activeIndex:4, selectedIndex:2}
    ];

    const routes =useMemo(()=>[{name:"Home", link:"/", activeIndex:0},
    {name:"Services",link:"/services",activeIndex:1},
    {name:"Portfolio",link:"/portfolio",activeIndex:2},
    {name:"About", link:"/about",activeIndex:3},{name:"Rating",link:"/rating",activeIndex:4, ariaOwns: anchorEl ? "simple-menu" : undefined,
    ariaHasPopup: anchorEl ? "true" : undefined,
    onMouseOver: (event) => handleClick(event)},
    ],[anchorEl]);


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
                    <ListItem onClick={()=>{ setOpenDrawer(false);props.setValue(0)}} divider button component={Link} to="/" selected={props.value===0}>
                        <ListItemText className={props.value===0 ?[classes.drawerItem,classes.drawerItemSelected]:classes.drawerItem} disableTypography>Home</ListItemText>
                    </ListItem>
                    <ListItem onClick={()=>{ setOpenDrawer(false);props.setValue(1)}} divider button component={Link} to="/services" selected={props.value===1}>
                        <ListItemText className={props.value===1 ?[classes.drawerItem,classes.drawerItemSelected]:classes.drawerItem} disableTypography>Services</ListItemText>
                    </ListItem>
                    <ListItem onClick={()=>{ setOpenDrawer(false);props.setValue(2)}} divider button component={Link} to="/portfolio" selected={props.value===2} >
                        <ListItemText className={props.value===2 ?[classes.drawerItem,classes.drawerItemSelected]:classes.drawerItem} disableTypography>Portfolio</ListItemText>
                    </ListItem>
                    <ListItem onClick={()=>{ setOpenDrawer(false);props.setValue(3)}} divider button component={Link} to="/about" selected={props.value===3}>
                        <ListItemText className={props.value===3 ?[classes.drawerItem,classes.drawerItemSelected]:classes.drawerItem} disableTypography>About</ListItemText>
                    </ListItem> 
                    <ListItem onClick={()=>{ setOpenDrawer(false);props.setValue(4)}} divider button component={Link} to="/rating" selected={props.value===3}>
                        <ListItemText className={props.value===4 ?[classes.drawerItem,classes.drawerItemSelected]:classes.drawerItem} disableTypography>Rating</ListItemText>
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
        [...menuOptions,...routes].forEach(route=>{
            switch(window.location.pathname){
                case`${route.link}`:
                    if(props.value!== route.activeIndex) {
                        props.setValue(route.activeIndex)
                        if (route.selectedIndex && route.selectedIndex!==props.selectedIndex){
                            props.setSelectedIndex(route.selectedIndex)
                        }
                    }
                break;
            default:
        break;
    }
    })
    },[props.value,props.selectedIndex,routes,menuOptions,props]);

    const tabs=(
        <React.Fragment>
            <Paper elevation={0} className={classes.tabs} >
                            <Tabs 
                                value={props.value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                centered
                            >
                                <Tab className={classes.tab} component={Link} to="/" label="HOME"/>
                                <Tab component={Link} to="/services" label="SERVICES"/>
                                <Tab component={Link} to="/portfolio" label="PORTFOLIO"/>
                                <Tab component={Link} to="/about" label="ABOUT"/>
                                <Tab aria-owns={anchorEl? "simple-menu": undefined}
                                    aria-haspopup={anchorEl? "true": undefined}
                                    className={classes.tab} 
                                    component={Link} 
                                    onClick={event => handleClick(event)}
                                    to="/rating" 
                                    label="Rating"/>
                            </Tabs>

                            <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={openMenu}
                        onClose={handleClose}
                        classes={{paper:classes.menu}}
                        MenuListProps={{onMouseLeave:handleClose}}
                        elevation={0}
                        >

                         {menuOptions.map((option,i)=>(
                             <MenuItem 
                             key={option}
                             component={Link} 
                             to={option.link}
                             classes={{root:classes.menuItem}} 
                             onClick={event=>{
                                handleMenuItemClick(event,i);
                                props.setValue(4);
                                handleClose();
                                }}
                             selected={i===props.selectedIndex && props.value===4}
                             >{option.name}
                             </MenuItem>
                         ))}
                        </Menu>

                            
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