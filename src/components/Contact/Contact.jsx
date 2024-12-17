import { Box, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ContactStyles from './ContactStyles.jsx'

const Contact = () => {
  return (
    <>
    <Box sx={ContactStyles.contactText}>
        <Typography sx={ContactStyles.contactTopic}>Contact Us</Typography>
        <Typography sx={ContactStyles.contactQues}>Have questions or need more information?Reach out to us at.</Typography>
        <Box sx={{display:'flex'}}>
        <Box sx={ContactStyles.contactBox}>
            <Typography sx={ContactStyles.mailTo}>MAIL TO</Typography>
            <Typography sx={ContactStyles.mail}>info@veridian.com</Typography>
        </Box>
        <Box sx={ContactStyles.icon}>
            <ArrowForwardIcon/>
        </Box>
        </Box>
        <Typography sx={ContactStyles.help}>'We're help to help'</Typography>
    </Box>
    </>
  )
}

export default Contact