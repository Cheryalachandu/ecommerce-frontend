import React from 'react'
import { Avatar, HStack, Text } from '@chakra-ui/react'
import { FiChevronDown } from "react-icons/fi"

const Profile = () => {
  return (
    <HStack color="blackAlpha.600" cursor="pointer">
      <Avatar src='https://bit.ly/broken-link' />
      <Text fontSize="sm">Chandu</Text>
      <FiChevronDown />
    </HStack>
  )
}

export default Profile
