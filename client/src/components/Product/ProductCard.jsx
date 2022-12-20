import {
  AspectRatio,
  Box,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { Rating } from "./Rating";
import { FavouriteButton } from "./FavouriteButton";
import  PriceTag  from "./PriceTag";

import AddToCardButton from "./AddToCardButton";
export const ProductCard = (props) => {
  const { product, rootProps } = props;
  const { name, price, salePrice, rating, ratingCount, slug, imageUrl } =
    product;
  const { id, src, alt } = imageUrl;

  return (
    <Stack position="relative" w={150} h={'auto'}>
      <Stack
        textDecoration="none"
        cursor={"pointer"}
        border={"1px #d9bceb solid"}
        borderRadius={useBreakpointValue({
          base: "md",
          md: "xl",
        })}
        {...rootProps}
        zIndex={100}
        p={1}
      >
        <Link
          as={"a"}
          href={`/p/${id}-${slug}`}
          target={"_blank"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Box>
            <AspectRatio ratio={2 / 3} overflow={"hidden"}>
              <Image
                src={src}
                alt={alt}
                draggable={false}
                fallback={<Skeleton />}
                borderRadius={useBreakpointValue({
                  base: "md",
                  md: "xl",
                })}
                transition="all .5s ease-in-out"
                _hover={{
                  transform: "scale(1.02)",
                }}
              />
            </AspectRatio>
          </Box>
          <Stack>
            <Stack spacing="1">
              <Link>
                <Text
                fontSize={13}
                  color={useColorModeValue("gray.700", "gray.400")}
                >
                  {name}
                </Text>
              </Link>

              <PriceTag
                price={price}
                salePrice={salePrice}
                currency="TRY"
                locale={"tr-TR"}
              />
            </Stack>
            <HStack>
              <Rating defaultValue={rating} size="sm" />
              <Text
                as="small"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                {ratingCount === 0 ? null : `(${ratingCount})`}
              </Text>
            </HStack>
          </Stack>
          <Stack align="center" mt={2}>
            <AddToCardButton />
          </Stack>
        </Link>
      </Stack>

      <FavouriteButton
        position="absolute"
        top="0"
        right="1"
        aria-label={`Add ${name} to your favourites`}
        zIndex={110}
      />
    </Stack>
  );
};
