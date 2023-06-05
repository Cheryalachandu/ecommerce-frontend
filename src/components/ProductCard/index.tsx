import { Box, VStack, Text, HStack, Button } from "@chakra-ui/react";
import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";
import { ProductProps } from "../../utils/helper";

const ProductCard = (props: ProductProps) => {
  const { title, price, image, _id } = props;
  const navigate = useNavigate();

  const productViewHandler = () => {
    navigate({
      pathname: "/products/product",
      search: `?${createSearchParams({ _id: _id })}`,
    });
  };
  return (
    <VStack
      border="1px solid"
      borderColor="blackAlpha.400"
      borderRadius="0.5rem"
      w="sm"
      h="sm"
      p="1rem"
    >
      <Box height="30%">
        <img
          src={image}
          alt="product-card"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <VStack alignItems="flex-start">
        <Text
          fontSize="sm"
          fontWeight="bold"
          color="blackAlpha.600"
          textAlign="center"
        >
          {title}
        </Text>
        <Text fontSize="x-large" fontWeight="bold" color="red.400">
          $ {price}
        </Text>
        <HStack gap="1rem">
          <Button
            leftIcon={<HiOutlineShoppingCart />}
            colorScheme="teal"
            borderRadius="0.5rem"
          >
            cart
          </Button>
          <Button
            leftIcon={<AiOutlineHeart />}
            borderRadius="0.5rem"
            colorScheme="teal"
            variant="outline"
          >
            wishlist
          </Button>
        </HStack>
        <Button onClick={productViewHandler}>View</Button>
      </VStack>
    </VStack>
  );
};

export default ProductCard;
