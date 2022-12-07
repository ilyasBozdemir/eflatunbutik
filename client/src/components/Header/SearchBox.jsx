import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { encode, decode } from "html-entities";
import { useSearchParams } from "react-router-dom";
import {
  Stack,
  Button,
  Text,
  Box,
  InputGroup,
  InputRightElement,
  Input,
  IconButton,
  Icon,
  Flex,
  HStack,
} from "@chakra-ui/react";

import { AiOutlineClose } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BiTrash } from "react-icons/bi";

function SearchBox() {
  const [isActive, setIsActive] = React.useState("");

  const [searchHistory, setSearchHistory] = React.useState([
    { name: "Elbise", to: "/elbise/" },
    { name: "trençkot", to: "/trenckot/" },
    { name: "kaban", to: "/kaban/" },
  ]);

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [closeButtonShow, setCloseButtonShow] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(
    decode(searchParams.get("q"))
  );

  React.useEffect(() => {
    if (inputValue.length > 0) {
      setCloseButtonShow(true);
    } else {
      setCloseButtonShow(false);
    }
  }, [inputValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== "") navigate(`/ara?q=${encode(inputValue)}`);
  };
  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <form autocomplete="off" onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <Flex
            direction={"row"}
            border={"1px solid"}
            borderRadius={"16px"}
            pos={"relative"}
          >
            <InputGroup>
              <Input
                placeholder="Ürün,kategori ara"
                borderRadius="16px 0 0 16px"
                value={inputValue}
                onChange={handleChange}
                onKeyPress={handleKeypress}
                w={{ base: "350px" }}
                pl={2}
                css={{
                  "::placeholder": {
                    color: "#4A5568",
                  },
                }}
              />
              {closeButtonShow === true ? (
                <InputRightElement
                  children={
                    <IconButton
                      onClick={() => setInputValue("")}
                      bg="transparent"
                      _hover={{ bg: "transparent" }}
                      icon={<AiOutlineClose />}
                    />
                  }
                />
              ) : (
                ""
              )}
            </InputGroup>
            <IconButton
              ml={1}
              type="submit"
              bg="transparent"
              _hover={{ bg: "transparent" }}
              icon={<FiSearch borderRadius="16px 0 0 16px" />}
            />

            <Box
              css={{
                backgroundColor: "#fff",
                borderRadius: "16px",
                position: "absolute",
                border: "1px solid #d4d4d4",
                borderBottom: "none",
                borderTop: "none",
                zIndex: 99,
                top: "100%",
                left: 0,
                right: 0,
              }}
            >
              <Box
                css={{
                  padding: "10px",
                  cursor: "pointer",
                  bg: "#fff",
                }}
              >
                {inputValue.length > 0 ? (
                  <>[aranan keyler gelecek]</>
                ) : searchHistory.length > 0 ? (
                  <>
                    <Flex direction={"column"}>
                      {searchHistory.map((item, i) => (
                        <SearchBoxItem key={i} {...item} />
                      ))}
                    </Flex>
                  </>
                ) : (
                  ""
                )}
              </Box>
            </Box>
          </Flex>
        </Stack>
      </form>
    </>
  );
}
const SearchBoxItem = (props) => {
  const [searchBoxItemIsFocus, setSearchBoxItemIsFocus] = React.useState(false);

  const { name, to } = props;
  return (
    <>
      <Box
        css={{
          padding: "10px",
          cursor: "pointer",
          bg: "#fff",
          color: "#000",
          borderBottom: "1px solid #d4d4d4",
          width: "100%",
        }}
        _hover={{ bg: "pink.500", color: "#fff" }}
        onMouseEnter={() => setSearchBoxItemIsFocus(false)}
        onMouseLeave={() => setSearchBoxItemIsFocus(true)}
      >
        <Flex justifyContent={"space-between"}>
          <Link to={to}>
            <HStack spacing="4px">
              <Box>
                <FiSearch />
              </Box>
              <Box> {name}</Box>
            </HStack>{" "}
          </Link>
          {searchBoxItemIsFocus === false ? (
            <Icon
              as={BiTrash}
              onClick={() => {
                alert("item kaldırıldı.");
              }}
            />
          ) : (
            ""
          )}
        </Flex>
      </Box>
    </>
  );
};

export default SearchBox;
