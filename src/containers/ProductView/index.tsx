import { HStack, VStack, Text, Button, Box } from '@chakra-ui/react'
import React, { FC } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { FiShoppingCart } from "react-icons/fi"
import { FcLike } from "react-icons/fc"

const ProductView = () => {
    const product =
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: { rate: 3.9, count: 120 },
    }
    return (
        <HStack h="100vh" w="100vw" p="5rem">
            <Box display="flex" justifyContent="center" alignItems="center" flex="1">
                <img src={product.image} width="50%" />
            </Box>
            <VStack h="100%" w="50%" justifyContent="space-around" gap="2rem" flex="1" p="2rem">
                <VStack alignItems="flex-start" gap="1.5rem">
                    <Text fontSize="xx-large" fontWeight="bold" lineHeight="1.3">{product.title}</Text>
                    <Text color="red.600" fontSize="x-large" fontWeight="bold">$ {product.price}</Text>
                    {/* radar for items Left*/}
                    <Text fontWeight="bold" fontSize="medium">{product.rating.count} item left</Text>
                    <VStack alignItems="flex-start">
                        <Text fontWeight="bold">Description</Text>
                        <Text>{product.description}</Text>
                    </VStack>
                </VStack>
                <VStack w="100%" p="3em 0rem" backgroundColor="gray.50" gap="1rem">
                    <QuantityBar width='90%'/>
                    <Button w="90%">Buy Now</Button>
                    <HStack>
                        <Button leftIcon={<FiShoppingCart />}>Add to Cart</Button>
                        <Button leftIcon={<FcLike fill='blackAlpha.500' />}>WishList</Button>
                    </HStack>
                </VStack>

            </VStack>
        </HStack>
    )
}

export default ProductView


interface QuantityBarProps {
    width : string
}

export const QuantityBar: FC<QuantityBarProps> = (props) => {
    const { width } = props;
    return (
        <HStack
            cursor="pointer"
            border="1px solid"
            borderColor="blackAlpha.400"
            w={width} p="0.5rem"
            justifyContent="space-between"
            alignItems="center"
            borderRadius="0.25rem"
            backgroundColor="#ffffff"
        >
            <AiOutlineMinus />
            <Text>Quantity</Text>
            <AiOutlinePlus />
        </HStack>
    )
}
