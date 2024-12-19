import { Copyright, Padding } from "@mui/icons-material";
import { height } from "@mui/system";

const LandingPageStyles = {
  appbar: {
    display: "flex",
    backgroundColor: "#ffffff",
    borderBottom: "3px solid #CACFDB",
    paddingBottom: "14px",
    position: 'sticky',
    top: 0,
    height:"5.5rem",
    zIndex:1000,
    '@media(max-width:764px)':{
      // width:'90%',
      justifyContent:'space-between',
    }
  },
  appbarOptions: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "none",
    color: "secondary.main",
    fontSize: "1.3rem",
    fontFamily: "IBM_Plex_Serif",
    fontWeight: 600,
    marginInline: "1rem",
    borderRadius:'0px',
     height:'45px',
     marginTop:'1.7%',
    "&:hover": {
      color: "primary.main",
      backgroundColor: "transparent",
    },
  },
  logo: {
    marginLeft: "4.3rem",
    marginRight: "14rem",
    marginTop:'10px',
    '@media(max-width:764px)':{
      height:'85px',
        width:'85px',
        objectFit: 'contain',
        paddingTop:'1rem',
        marginLeft:'4%',
        
    }
  },
 
  investmentBg:{
    backgroundColor:'#d9efea',
    height: "52rem",
    width: "72.4rem",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    marginLeft: "4.2%",
    paddingInline:'7.8%',
    '@media(max-width:764px)':{
      width:'75.4%',
      marginInline:'4.1%',
      paddingBottom:'20%'
    }

  },
  CopyrightBox:{
    marginTop:'2%',
   padding:'1% 2%',
    borderTop:'3px solid #CACFDB',
    display:'flex',
   alignItems:'center',
   backgroundColor:'#F5F7FA'
  },
  copyRightLanding:{
    fontSize:'13px',
  },

 
};

export default LandingPageStyles;
