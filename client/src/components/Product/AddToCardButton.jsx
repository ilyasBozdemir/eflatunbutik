import React from "react";
import {
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue as UseColorModeValue,
} from "@chakra-ui/react";

import { BiShoppingBag } from "react-icons/bi";

function AddToCardButton({ product }) {
  const { id } = product;
  return (
    <>
      <Button
        width="full"
        variant="primary"
        color={"white"}
        bg={UseColorModeValue("gray.100", "gray.700")}
        bgGradient={"linear(to-l, #7928CA, #FF0080)"}
        _hover={{
          opacity: 0.9,
        }}
        onClick={() => alert(id)}
      >
        <Flex justifyContent={"space-between"} direction={"row"} justifyItems={'center'}>
          <Icon as={BiShoppingBag} />
          <Text>Sepete Ekle</Text>
        </Flex>
      </Button>
    </>
  );
}

export default AddToCardButton;
