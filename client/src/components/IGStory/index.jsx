import React from "react";

import { Flex, Image, Stack, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/fa";
const images = [
  {
    name: "Sana Özel",
    onClickHandled: "",
    to: "/sanaozel/",
    src: "https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1058&q=80",
  },
  {
    name: "Yeni Gelenler",
    onClickHandled: "",
    to: "/yeni-gelenler/",
    src: "https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1058&q=80",
  },
  {
    name: "Elbise",
    onClickHandled: "",
    to: "/elbise/",
    src: "https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1058&q=80",
  },
  {
    name: "Triko",
    onClickHandled: "",
    to: "/triko/",
    src: "https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1058&q=80",
  },
];
const ImageItem = (props) => {
  const { src, to, name } = props;
  return (
    <Link to={to}>
      <Stack
        display={"flex !important"}
        direction={"column"}
        w={110}
        alignItems={"center"}
      >
        <Image
          css={{
            borderWidth: "4px",
            borderStyle: "solid",
            background: "linear-gradient(45deg, purple, orange) border-box",
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
    </Link>
  );
};

function index() {
  return (
    <>
      <Box>
        <Flex direction={"row"} minWidth="max-content">
          {images.map((image, index) => (
            <ImageItem key={index} {...image} />
          ))}
        </Flex>
      </Box>
    </>
  );
}

export default index;
