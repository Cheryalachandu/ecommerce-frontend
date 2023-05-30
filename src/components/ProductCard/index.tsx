import { Box, VStack, Text, HStack, Button } from '@chakra-ui/react'
import React from 'react'

type ProductProps = {
    id?: number,
    title: string,
    price: number,
    description?: string,
    image: string
}

const ProductCard = (props: ProductProps) => {
    const { title, price, image } = props;
    return (
        <VStack justifyContent="center" alignItems="center" w="20rem" h="15rem" border="1px solid" borderColor="blackAlpha.100" gap="2rem">
            <Box w="5rem" h="5rem">
                <img src={image} width="100%" height="100%" />
            </Box>
            <HStack>
                <Text fontSize="sm">{title.split(" ")[0]}</Text>
                <Text fontSize="sm" >{price}</Text>
                <Button>Add to Cart</Button>
            </HStack>
        </VStack>
    )
}

export default ProductCard
