import { Flex, HStack, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

const Showcase = React.lazy(() => import("../components/Showcase"));
const Highlights = React.lazy(() => import("../components/Highlights"));
const IGStory = React.lazy(() => import("../components/IGStory/IGStory"));
const MySlider = React.lazy(() => import("../components/MySlider"));

function Home() {
  return (
    <>
      <HStack mt={4}>
        <IGStory />
      </HStack>

      <Flex direction={"row"} justifyContent={{base:"space-between",md:'space-around'}} mt={4}>
        <Highlights />
      </Flex>

      <HStack mt={4}>
        <Showcase />
      </HStack>
    </>
  );
}

export default Home;
