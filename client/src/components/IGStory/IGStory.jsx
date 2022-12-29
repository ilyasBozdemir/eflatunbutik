import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Flex,
  Image,
  Stack,
  Text,
  Box,
  Icon,
  background,
  Button,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

import {
  motion,
  useDragControls,
  useMotionValue,
  useAnimation,
} from "framer-motion";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const images = [
  {
    name: "Yeni Gelenler",
    to: "/yeni-gelenler/",
    src: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Elbise",
    to: "/elbise/",
    src: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Triko",

    to: "/triko/",
    src: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Üst Giyim",

    to: "/ust-giyim/",
    src: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Alt Giyim",

    to: "/alt-giyim/",
    src: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Dış Giyim",

    to: "/dis-giyim/",
    src: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Outlet",

    to: "/outlet/",
    src: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
];

const ImageItem = (props) => {
  const { src, to, name, ...rest } = props;
  const navigate = useNavigate();

  return (
    <>
      <Stack
        display={"flex !important"}
        direction={"column"}
        alignItems={"center"}
        overflow={"auto"}
        {...rest}
        onClick={() => {
          navigate(to);
        }}
      >
        <Image
          css={{
            borderRadius: "50px",
          }}
          borderRadius="full"
          boxSize="50px"
          src={src}
          alt={name}
          objectFit="cover"
          draggable={false}
        />
        <Text as={"span"} size={"sm"}>
          {name}
        </Text>
      </Stack>
    </>
  );
};

const PreviousBtn = (props) => {
 
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <BsChevronLeft style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <BsChevronRight style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};

function IGStory() {

  return (
    <>
      <Slider 
      slidesToShow={6}
      lazyLoad={true}
      initialSlide={2}
      infinite
      prevArrow={<PreviousBtn />}
      nextArrow={<NextBtn />}
      >
        {images.map((image, index) => {
          return (
            <Box as={"span"} key={index} cursor={"pointer"}>
              <ImageItem {...image} />
            </Box>
          );
        })}
      </Slider>
    </>
  );
}

export default React.memo(IGStory);
