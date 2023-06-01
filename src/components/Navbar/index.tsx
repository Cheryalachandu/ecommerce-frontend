import React, { FC } from "react";
import { HStack, Box, Text } from "@chakra-ui/react";
import Profile from "../Profile";
import { useNavigate } from "react-router";
import { getCategory } from "../../utils/helper";

const Navbar: FC = (props) => {
  const navigate = useNavigate();

  const Catagerios = () => {
    const productCategerios = [
      {
        id: 1,
        name: "mens clothing",
      },
      {
        id: 2,
        name: "womens clothing",
      },
      {
        id: 3,
        name: "jewelery",
      },
      {
        id: 4,
        name: "electronics",
      },
    ];

    const categoryHandler = (category: string) => {
      navigate(`/products/${getCategory(category)}`);
    };
    return (
      <HStack spacing="3rem">
        {productCategerios?.map((category) => (
          <Box
            cursor="pointer"
            color="blackAlpha.600"
            key={category?.id}
            onClick={() => categoryHandler(category?.name)}
          >
            <Text textTransform="capitalize">{category?.name}</Text>
          </Box>
        ))}
      </HStack>
    );
  };

  return (
    <HStack
      justifyContent="space-around"
      alignItems="center"
      border="1px solid"
      borderColor="blackAlpha.100"
      p="1rem"
    >
      <Text fontSize="lg">LOGO</Text>
      <Catagerios />
      <Profile />
    </HStack>
  );
};

export default Navbar;
