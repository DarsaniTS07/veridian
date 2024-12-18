import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LandingPageStyles from "./LandingPageStyles.jsx";
import VeridianLogo from "../../assets/VeridianLogo.jsx";
import OurTeam from "../../components/ourTeam/OurTeam.jsx";
import Investment from "../../components/Investment/Investment.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import AboutUs from "../../components/AboutUs/AboutUs.jsx";
import Home from "../../components/Home/Home.jsx";
import { scrollToSection } from "../../utilis.js";
import { useStore } from "../../useStore.js";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import VeridianLogoWithoutBg from "../../assets/VeridianLogoWithoutBg.png";

const LandingPage = () => {
  const navItems = [
    { name: "Home", sectionId: "home" },
    { name: "About Us", sectionId: "aboutUs" },
    { name: "Our Team", sectionId: "ourTeam" },
    { name: "Investment Approach", sectionId: "investmentApproach" },
    { name: "Contact Us", sectionId: "contactUs" },
  ];

  const { setCurrentSection } = useStore();
  const [activeSection, setActiveSection] = useState("home");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleAppbarClick = (sectionId) => {
    console.log(`Scrolling to section: ${sectionId}`);
    setCurrentSection(sectionId);
    setActiveSection(sectionId);
    scrollToSection(sectionId);
    setIsDrawerOpen(false);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Box sx={LandingPageStyles.appbar}>
        <Box
          component="img"
          src={VeridianLogoWithoutBg}
          sx={LandingPageStyles.logo}
        ></Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
          }}
        >
          {navItems.map((item) => (
            <Button
              disableRipple
              disableTouchRipple
              sx={{
                ...LandingPageStyles.appbarOptions,
                borderBottom:
                  activeSection === item.sectionId
                    ? "3px solid #009065"
                    : "none",
                color:
                  activeSection === item.sectionId ? "primary.main" : "inherit",
              }}
              key={item.name}
              onClick={() => handleAppbarClick(item.sectionId)}
            >
              {item.name}
            </Button>
          ))}
        </Box>

        <IconButton
          sx={{
            display: { xs: "block", sm: "none" },
            color: "inherit",
            marginRight: "6%",
          }}
          onClick={toggleDrawer}
        >
          {isDrawerOpen ? (
            <CloseIcon />
          ) : (
            <MenuIcon sx={{ height: "60px", width: "35px" }} />
          )}
        </IconButton>
      </Box>
      <Drawer
        anchor="top"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%%",
            // padding: "1rem",
            backgroundColor: "white",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            // justifyContent:'space_between',
            alignItems: "center",
            borderBottom: "2px solid #CACFDB",
            paddingInline: "1rem",
          }}
        >
          <Box
            component="img"
            src={VeridianLogoWithoutBg}
            sx={{
              height: "65px",
              width: "65px",
              objectFit: "contain",
              paddingTop: "1rem",
            }}
          ></Box>
          <CloseIcon
            sx={{
              fontSize: { xs: "30px", sm: "24px" },
              marginLeft: "auto",
              cursor: "pointer",
              // onClose:{toggleDrawer}
            }}
          />
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton onClick={() => handleAppbarClick(item.sectionId)}>
                <ListItemText primary={item.name} sx={{ fontSize: "30px" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Home */}

      <Box
        id="home"
        sx={{
          height: "auto",
          margin: "auto",
          paddingTop: "11%",
          paddingBottom: "11%",
          width: "98%",
          marginTop: "3.4%",
          paddingRight: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "4.2rem",
          backgroundImage: `url('src/assets/Homebg.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          "@media(max-width:764px)": {
            marginLeft: "4px",
          },
          // marginLeft: { xs: "5px", sm: "6rem" },
        }}
      >
        <Home />
      </Box>

      {/* About Us */}

      <Box
        sx={{
          height: "auto",
          width: "91%",
          marginTop: "2.5rem",
          display: "flex",
          marginInline: "4.2%",
          // marginLeft: "4rem",
          backgroundImage: `url('src/assets/AboutUsbg.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", width: "76rem" }}>
          <Box id="aboutUs">
            <AboutUs />
          </Box>

          {/* Our Team */}
          <Box id="ourTeam">
            <OurTeam />
          </Box>
        </Box>
      </Box>

      {/* Investment Approach */}

      <Box id="investmentApproach" sx={LandingPageStyles.investmentBg}>
        <Investment />
      </Box>

      {/* Contact */}
      <Box
        id="contactUs"
        sx={{
          height: "15.5rem",
          width: "91.2%",
          display: "flex",
          marginInline: "4.1%",
          backgroundImage: `url('src/assets/ContactBg.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Contact />
      </Box>
      <Box sx={LandingPageStyles.CopyrightBox}>
        <Typography sx={LandingPageStyles.copyRightLanding}>
          COPYRIGHT © Veridian 2024. All rights reserved. Any and all content
          included on this website or incorporated by reference is protected by
          international copyright laws.
        </Typography>
        <Typography sx={{ marginLeft: "auto", fontSize: "14px" }}>
          Term of use
        </Typography>
      </Box>
    </>
  );
};

export default LandingPage;
