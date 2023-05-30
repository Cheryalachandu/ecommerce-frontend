import React from 'react'
import { HStack, Box, Text } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <HStack justifyContent="space-around" alignItems="center" border="1px solid" borderColor="blackAlpha.100" p="1rem">
            <Text fontSize="lg">LOGO</Text>
            <HStack spacing="3rem">
                <Box>
                    <Text>Mens Clothing</Text>
                </Box>
                <Box>
                    <Text>Womens Clothing</Text>
                </Box>
                <Box>
                    <Text>Electronics</Text>
                </Box>
                <Box>
                    <Text>Jewellary</Text>
                </Box>
            </HStack>
            <Text>Profile</Text>
        </HStack>
    )
}

export default Navbar
