import {createMuiTheme} from '@material-ui/core/styles';

const arcBlack= "#45545F"
const arcBrown="#CEC6B6"


export default createMuiTheme({
    palette:{
        common:{
            blue:`${arcBlack}`,
            orange:`${arcBrown}`
        },
        primary:{
            main:`${arcBlack}`
        },
        secondary:{
            main:`${arcBrown}`
        },
        background:{
            paper:"transparent"      
        },
    },
    
    
    
});