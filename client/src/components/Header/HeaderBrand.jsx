import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  HStack,
  Button,
  useDisclosure as UseDisclosure,
  Icon,
  Skeleton,
} from "@chakra-ui/react";

import Logo from "../Logo";

import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

import { MdOutlineShoppingCart, MdShoppingCart } from "react-icons/md";

import SearchBox from "./SearchBox";

import { Link } from "react-router-dom";

import UserMenu from "./UserMenu";
function HeaderBrand() {
  const { isOpen, onOpen, onClose } = UseDisclosure();
  const [isFavoriShown, setIsFavoriShown] = React.useState(false);
  const [shoppingCartisShown, setShoppingCartIsShown] = React.useState(false);
  const [userIsShown, setUserIsShown] = React.useState(false);
  return (
    <>
      <Flex justifyContent={"flex-start"} mt={5}>
        <Heading size="md">
          <Link to="/">
            <Logo />
          </Link>
        </Heading>

        <Spacer />

        <Box borderRadius={"50px 50px 50px 50px"}>
          <SearchBox />
        </Box>

        <Spacer />

        <HStack>
          <UserMenu isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

          <Link
            bg={"transparent"}
            aria-label="product favorite"
            onMouseEnter={() => setIsFavoriShown(true)}
            onMouseLeave={() => setIsFavoriShown(false)}
            mx={1}
            px={2}
          >
            {isFavoriShown ? (
              <Icon as={MdFavorite} fontSize={25} />
            ) : (
              <Icon as={MdOutlineFavoriteBorder} fontSize={25} />
            )}
          </Link>

          <Link
            bg={"transparent"}
            aria-label="product basket button"
            onMouseEnter={() => setShoppingCartIsShown(true)}
            onMouseLeave={() => setShoppingCartIsShown(false)}
            to="/sepetim/"
            mx={1}
            px={2}
          >
            {shoppingCartisShown ? (
              <Icon as={MdShoppingCart} fontSize={25} />
            ) : (
              <Icon as={MdOutlineShoppingCart} fontSize={25} />
            )}
          </Link>
        </HStack>
      </Flex>
    </>
  );
}

export default HeaderBrand;
