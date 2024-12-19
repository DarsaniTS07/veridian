import { Box, IconButton, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import OurTeamStyles from "./OurTeamStyles.jsx";
import entry from "./ourTeam.json";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const OurTeam = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <Box>
      <Typography sx={OurTeamStyles.ourTeamTypography}>Our Team</Typography>

      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          ...OurTeamStyles.ourTeamContent,
        }}
      >
        <IconButton ref={prevRef} sx={OurTeamStyles.iconLeft}>
          <WestIcon />
        </IconButton>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={-30}
          slidesPerView={1.5}
          centeredSlides={true}
          navigation={{
            nextEl: nextRef.current,
            prevEl: prevRef.current,
          }}
          breakpoints={{
            764: {
              slidesPerView: 1,
              spaceBetween: 1,
            },
          }}
          pagination={{ clickable: true }}
          modules={[Navigation]}
        >
          {entry.ourTeam.map((content, index) => (
            <SwiperSlide key={`ourTeam-${content.main_id}-${index}`}>
              <Box sx={OurTeamStyles.parallelogramBox}>
                <Box sx={OurTeamStyles.parallelogramContent}>
                  <Box sx={OurTeamStyles.parallset1}>
                    <Box
                      component="img"
                      src={content.image}
                      sx={{
                        ...OurTeamStyles.photo,
                        marginTop:
                          index === 0
                            ? "3.1rem"
                            : index === 1
                            ? "6.1rem"
                            : "7.7rem",
                      }}
                    ></Box>
                    <Box sx={OurTeamStyles.parallelset2}>
                      <Box sx={OurTeamStyles.ourTeamText}>
                        {Array.isArray(content.content) ? (
                          content.content.map((paragraph, index) => (
                            <Typography
                              key={index}
                              sx={{
                                ...OurTeamStyles.paragraph,
                                marginBottom:
                                  index !== content.content.length - 1
                                    ? "1rem"
                                    : "0",
                                marginLeft:
                                  index !== content.content.length - 1
                                    ? "-1.9rem"
                                    : "0",
                                transform:
                                  index !== content.content.length - 1
                                    ? "skew(12deg)"
                                    : "skew(12deg)",
                                "@media(max-width:764px)": {
                                  transform:
                                    index !== content.content.length - 1
                                      ? "skew(0deg)"
                                      : "skew(0deg)",
                                },
                              }}
                            >
                              {paragraph}
                            </Typography>
                          ))
                        ) : (
                          <Typography sx={OurTeamStyles.ourTeamText}>
                            {content.content}
                          </Typography>
                        )}
                      </Box>

                      <Box
                        sx={{
                          ...OurTeamStyles.smallParallelogram,
                          marginTop:
                            index === 0
                              ? "6.6rem"
                              : index === 1
                              ? "9.1rem"
                              : "1.3rem",
                        }}
                      >
                        <Box>
                          <Typography sx={OurTeamStyles.OurTeamName}>
                            {content.name}
                          </Typography>
                          <Typography sx={OurTeamStyles.designation}>
                            {content.designition}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        <IconButton ref={nextRef} sx={OurTeamStyles.iconRightButton}>
          <EastIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default OurTeam;
