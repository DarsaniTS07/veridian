import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LandingPageStyles from "./LandingPageStyles.jsx";
import VeridianLogo from "../../assets/VeridianLogo.jsx";
import OurTeam from "../../components/ourTeam/ourTeam.jsx";
import Investment from "../../components/Investment/Investment.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import AboutUs from "../../components/AboutUs/AboutUs.jsx";
import Home from "../../components/Home/Home.jsx";
import { scrollToSection } from "../../utilis.js";
import {useStore} from "../../useStore.js";

const LandingPage = () => {

  const navItems = [
   {name:'Home', sectionId:'home'},
   {name:'About Us', sectionId:'aboutUs'},
   {name:'Our Team', sectionId:'ourTeam'},
   {name:'Investment Approach', sectionId:'investmentApproach'},
   {name:'Contact Us', sectionId:'contactUs'},
  ];

  const {setCurrentSection} = useStore();
  const [activeSection, setActiveSection] = useState("home");

  const handleAppbarClick = (sectionId) => {
    console.log(`Scrolling to section: ${sectionId}`);
    setCurrentSection(sectionId);
    setActiveSection(sectionId);
    scrollToSection(sectionId);
  }

  return (
    <>
      <Box sx={LandingPageStyles.appbar}>
        <Box sx={LandingPageStyles.logo}>
          <VeridianLogo />
        </Box>
        {navItems.map((item) => (
          <Button
            disableRipple
            disableTouchRipple
            sx={{...LandingPageStyles.appbarOptions,
              // marginBottom:'-20px',
              // paddingBottom:'-50px !important',
              borderBottom: activeSection === item.sectionId ? "3px solid #009065" : "none",
              color: activeSection === item.sectionId ? "primary.main" : "inherit",}}
            key={item.name}
            onClick={() => handleAppbarClick(item.sectionId)}
          >
            {item.name}
          </Button>
        ))}
      </Box>

      {/* Home */}

      <Box
      id='home'
        sx={{ 
          height: "auto",
          margin:"auto",
          paddingTop:'11%',
          paddingBottom:'11%',
          width: "98%",
          marginTop: "3.4%",
         paddingRight:0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "4.2rem",
          backgroundImage: `url('src/assets/Homebg.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          "@media(max-width:764px)":{
          marginLeft:'4px'
          }
          // marginLeft: { xs: "5px", sm: "6rem" },
          
        }}
      >
        <Home/>
      </Box>

      {/* About Us */}

      <Box
        sx={{
          height: "auto",
          width: "91%",
          marginTop: "2.5rem",
          display: "flex",
          marginInline:'4.2%',
          // marginLeft: "4rem",
          backgroundImage: `url('src/assets/AboutUsbg.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", width: "76rem" }}>
<Box id='aboutUs'>
        <AboutUs />
        </Box>

          {/* Our Team */}
<Box id='ourTeam'>
          <OurTeam />
          </Box>
        </Box>
      </Box>

      {/* Investment Approach */}

      <Box  id='investmentApproach' sx={LandingPageStyles.investmentBg}>
        <Investment />
      </Box>

      {/* Contact */}
      <Box
      id='contactUs'
        sx={{
          height: "15.5rem",
          width: "87.5rem",
          display: "flex",
          marginLeft: "4rem",
          backgroundImage: `url('src/assets/ContactBg.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Contact />
      </Box>
      <Box sx={LandingPageStyles.CopyrightBox}>
        <Typography sx={LandingPageStyles.copyRightLanding}>COPYRIGHT © Veridian 2024. All rights reserved. Any and all content included on this website or incorporated by reference is protected by international copyright laws.</Typography>
        <Typography sx={{marginLeft:'auto',fontSize:'14px'}}>Term of use</Typography>
      </Box>
    </>
  );
};

export default LandingPage;
