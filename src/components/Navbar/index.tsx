import React from 'react'
import { HStack, Box, Text } from '@chakra-ui/react'
import Profile from '../Profile'

const Navbar = () => {
    return (
        <HStack justifyContent="space-around" alignItems="center" border="1px solid" borderColor="blackAlpha.100" p="1rem">
            <Text fontSize="lg">LOGO</Text>
            <Catagerios />
            <Profile />
        </HStack>
    )
}

export default Navbar


export const Catagerios = () => {

    const productCategerios = [
        {
            id: 1,
            name: "Mens Clothing"
        },
        {
            id: 2,
            name: "Womes Clothing"
        },
        {
            id: 3,
            name: "Jewellary"
        },
        {
            id: 4,
            name: "Electronics"
        }
    ]


    return (
        <HStack spacing="3rem">
            {productCategerios?.map(category => (
                <Box cursor="pointer" color="blackAlpha.600" key={category?.id}>
                    <Text>{category?.name}</Text>
                </Box>
            ))}
        </HStack>
    )
}
