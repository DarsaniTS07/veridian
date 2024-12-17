import React from 'react'
import HomeStyles from './HomeStyles'
import { Box, Typography } from '@mui/material'
import { HiArrowTurnRightDown } from 'react-icons/hi2'

const Home = () => {
  return (
    <Box sx={HomeStyles.homeText}>
          <Typography sx={HomeStyles.investment}>
            INVESTMENT MANAGEMENT
          </Typography>
          <Typography sx={HomeStyles.topicTypography}>
            Empowering Investments with Expertise and Strategy
          </Typography>
          <Typography sx={HomeStyles.knowTypgraphy}>
            Know more
            <HiArrowTurnRightDown
              style={{ marginLeft: "10px", fontSize: "20px" }}
            />
          </Typography>
        </Box>
  )
}

export default Home