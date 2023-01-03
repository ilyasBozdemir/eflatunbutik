import {
  Box,
  Flex,
  FormControl,
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  Icon,
} from "@chakra-ui/react";
import React from "react";

import { VscAccount } from "react-icons/vsc";
import Chip from "../icons/Chip";
import ReactInputMask from "react-input-mask";
import { CiCalendarDate } from "react-icons/ci";
import { AiOutlineCreditCard } from "react-icons/ai";
import { VscWorkspaceTrusted } from "react-icons/vsc";
function CreditCardPayment() {
  const [backface, setBackface] = React.useState(false);
  const [name, setName] = React.useState("");
  const [cardNumber, setCardNumber] = React.useState("");
  const [expire, setExpire] = React.useState("");
  const [cvc, setCvc] = React.useState("");

  return (
    <>
      <Flex direction={"column"} justifyContent={"center"}>
        <Flex direction={{ base: "column-reverse", md: "row" }}>
          <Stack w={280} spacing={5}>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Icon as={VscAccount} color="gray.500" />}
                />
                <Input placeholder="Kart Sahibi" />
              </InputGroup>
            </FormControl>
            <MaskedInput
              mask={"9999 9999 9999 9999"}
              placeholder={"Kart Numarası"}
              leftIcon={AiOutlineCreditCard}
            />
            <MaskedInput
              mask={"99/99"}
              placeholder={"Son Kullanma Tarihi"}
              leftIcon={CiCalendarDate}
            />
            <MaskedInput
              mask={"999"}
              placeholder={"CVC"}
              leftIcon={VscWorkspaceTrusted}
            />
          </Stack>
          <Stack mb={3} ml={15}>
            <div className={`card ${backface === true ? "flip" : ""}`}>
              <div className="front">
                <div className="card-top">
                  <Chip />
                  'kart_logo'
                </div>

                <div className="card-number">
                  {cardNumber || "**** **** **** ****"}
                </div>

                <div className="card-bottom">
                  <div>
                    <div class="key">Kart Sahibinin Adı</div>
                    <div className="value">{name || "***"}</div>
                  </div>
                  <div>
                    <div class="key">Expiry Date</div>
                    <div className="value">{expire || "***"}</div>
                  </div>
                </div>
              </div>
              <Box className="back">
                <div className="card-back">
                  CVC <em>{cvc || "***"}</em>
                </div>
              </Box>
            </div>
          </Stack>
        </Flex>

        <Box as="small" my="4">
          <Box fontWeight={"semibold"} as="p">
            Bilgilendirme,
          </Box>
          <Box as="p">
            Sistemimizde yapacağınız alışveriş, %100 şifrelenmiş ve güvenlidir.
            Kart bilgileriniz sadece siz ve banka arasındadır.
          </Box>
        </Box>
      </Flex>
    </>
  );
}

const MaskedInput = (props) => {
  return (
    <>
      <FormControl w={props.w}>
        <ReactInputMask mask={props.mask} maskChar=" ">
          {() => (
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={props.leftIcon} color="gray.500" />}
              />
              <Input placeholder={props.placeholder} />
            </InputGroup>
          )}
        </ReactInputMask>
      </FormControl>
    </>
  );
};

export default CreditCardPayment;