import { Box, Typography } from '@mui/material'
import React from 'react'
import AboutUsStyles from './AboutUsStyles'
import Excellence from '../../assets/Excellence';
import Initiative from '../../assets/Initiative';
import Sustainability from '../../assets/Sustainability';
import Integrity from '../../assets/Integrity';
import VeridianWithoutBg from "../../assets/VeridianLogoWithoutBg.png";
import data from "./AboutUs.json";


const AboutUs = () => {
    const componentsMap = {
        Excellence: <Excellence/>,
        Initiative: <Initiative/>,
        Sustainability: <Sustainability />,
        Integrity: <Integrity />,
      };
  return (
    <Box>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography sx={AboutUsStyles.aboutUsTypography}>
                About Us
              </Typography>
            </Box>
            <Box sx={AboutUsStyles.aboutUsWrapper}>
              <Box sx={AboutUsStyles.aboutUsVeridian}>
                <Box
                  component="img"
                  src={VeridianWithoutBg}
                  sx={AboutUsStyles.aboutUsVeridianPic}
                ></Box>
                <Box sx={{ marginTop: "2%" }}>
                  {data.aboutUs.map((text, index) => (
                    <Box
                      key={`aboutUs-${index}`}
                      sx={AboutUsStyles.aboutUsVeridianContent}
                    >
                      {text}
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box sx={AboutUsStyles.fourParts}>
                {data.aboutUsConent.map((item) => (
                  <Box
                    key={`aboutUsContent-${item.id}`}
                    sx={AboutUsStyles.content}
                  >
                    <Box sx={{ width: "25rem", marginInline: "1.5rem" }}>
                      <Typography sx={AboutUsStyles.contentTopic}>
                        {item.topic}
                      </Typography>
                      <Typography sx={AboutUsStyles.contentContent}>
                        {item.content}
                      </Typography>
                    </Box>
                    <Box sx={AboutUsStyles.contentImage}>
                      {componentsMap[item.image] || (
                        <Typography sx={AboutUsStyles.contentImage}>
                          Content Not Found
                        </Typography>
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
  )
}

export default AboutUs