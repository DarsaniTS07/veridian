import { Copyright, Padding } from "@mui/icons-material";

const LandingPageStyles = {
  appbar: {
    display: "flex",
    backgroundColor: "#ffffff",
    borderBottom: "3px solid #CACFDB",
    paddingBottom: "15px",
    position: 'sticky',
    top: 0,
    zIndex:1000
  },
  appbarOptions: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "none",
    color: "secondary.main",
    fontSize: "1.2rem",
    fontFamily: "IBM_Plex_Serif",
    fontWeight: 600,
    marginInline: "1rem",
    borderRadius:'0px',
    "&:hover": {
      color: "primary.main",
      backgroundColor: "transparent",
    },
  },
  logo: {
    marginLeft: "4.3rem",
    marginRight: "14rem",
  },
 
 
 
  investmentBg:{
    backgroundColor:'#d9efea',
    height: "64rem",
    width: "87.5rem",
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    marginLeft: "4rem",
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
