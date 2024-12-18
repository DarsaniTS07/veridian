import { Box, Typography } from "@mui/material";
import React from "react";
import "./InvestmentStyles.jsx";
import InvestmentStyles from "./InvestmentStyles.jsx";

import text from "./Investment.json";

const Investment = () => {
  return (
    <Box>
      <Box>
        <Typography sx={InvestmentStyles.investmentTypography}>
          Holistic Investment Approach
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        {text.investment.map((item,index) => (
          <Box
            key={`investment-${item.id || index}`}
            sx={InvestmentStyles.investmentBox}
          >
            <Box
              component="img"
              src={item.image}
              sx={InvestmentStyles.investmentImage}
            ></Box>
            <Box sx={InvestmentStyles.investmentText}>{item.topic}</Box>
            <Box sx={InvestmentStyles.investmentContent}>
              {Array.isArray(item.content) ? (
                item.content.map((paragraph, index) => (
                  <Typography sx={InvestmentStyles.paragraph}>
                    {paragraph}
                  </Typography>
                ))
              ) : (
                <Typography sx={InvestmentStyles.containerText}>
                  {item.content}
                </Typography>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Investment;