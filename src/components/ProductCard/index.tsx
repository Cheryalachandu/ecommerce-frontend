import { Box, VStack, Text, HStack, Button } from "@chakra-ui/react";
import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi"
import { AiOutlineHeart } from "react-icons/ai"

type ProductProps = {
    rating: {
        rate: number,
        count: number,
    },
    _id: string,
    title: string,
    price: number;
    description: string,
    category: string,
    image: string,
    __v?: number;
};

const ProductCard = (props: ProductProps) => {
    const { title, price, image } = props;
    return (
        <VStack
            border="1px solid"
            borderColor="blackAlpha.400"
            borderRadius="0.5rem"
            w="sm"
            h="sm"
            p="1rem">
            <Box height="50%">
                <img src={image} alt="product-card" style={{ width: "100%", height: "100%" }} />
            </Box>
            <VStack alignItems="flex-start">
                <Text fontSize="sm" fontWeight="bold" color="blackAlpha.600" textAlign="center">{title}</Text>
                <Text fontSize="x-large" fontWeight="bold" color="red.400">$ {price}</Text>
                <HStack gap="1rem">
                    <Button leftIcon={<HiOutlineShoppingCart />}  colorScheme="teal" borderRadius="0.5rem">
                        cart
                    </Button>
                    <Button leftIcon={<AiOutlineHeart />}borderRadius="0.5rem" colorScheme="teal" variant="outline">wishlist</Button>
                </HStack>
            </VStack>
        </VStack>
    );
};

export default ProductCard;
