import React from "react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

import { MainContext, useContext } from "../../contexts/MainContext";
import { CartItem } from "../Cart/CartItem";

function BasketView(props) {
  const { placement, onClose, isOpen } = props;
  const navigate = useNavigate();
  const { basket, setBasket } = useContext(MainContext);

  const deleteByValue = (v) => {
    setBasket((oldValues) => {
      return oldValues.filter((p) => p.id !== v.id);
    });
  };
  return (
    <>
      <Drawer
        w={"250px"}
        placement={placement}
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Sepetim: ({basket.length}) Ürün
          </DrawerHeader>
          <DrawerBody>
            <Stack>
              {/*basket.map((item) => (
                <>
                  <CartItem
                    key={item.id}
                    {...item}
                    onClickDelete={() => {
                      deleteByValue(item);
                    }}
                  />
                </>
              ))*/}
            </Stack>
          </DrawerBody>
          <DrawerFooter gap={3}>
            <Button
              fontSize={"md"}
              width={"full"}
              variant="primary"
              color={"white"}
              bg={useColorModeValue("gray.100", "gray.700")}
              bgGradient={"linear(to-l, #7928CA, #FF0080)"}
              _hover={{
                bg: useColorModeValue("gray.800", "gray.500"),
                bgGradient: "linear(to-r, #ac28ca, #ff1060)",
              }}
              onClick={() => {
                setTimeout(() => {
                  onClose();
                }, 300);
                navigate("/sepetim/");
              }}
            >
              Sepete Git
            </Button>

            <Button
              fontSize={"sm"}
              width={"full"}
              variant="primary"
              color={"white"}
              bg={useColorModeValue("gray.100", "gray.700")}
              bgGradient={"linear(to-l, #7928CA, #FF0080)"}
              _hover={{
                bg: useColorModeValue("gray.800", "gray.500"),
                bgGradient: "linear(to-r, #ac28ca, #ff1060)",
              }}
              onClick={() => {
                setTimeout(() => {
                  onClose();
                }, 300);
                //navigate("odeme/");
              }}
            >
              Alışverişi Tamamla
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default BasketView;
