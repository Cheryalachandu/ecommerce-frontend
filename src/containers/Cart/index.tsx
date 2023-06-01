import {
  HStack,
  Text,
  VStack,
  Divider,
  Box,
  Button,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { QuantityBar } from "../ProductView";
import { CgTrash } from "react-icons/cg";
import CustomInput from "../../components/CustomInput";
import { Popover } from "antd";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

interface CartCategoryProps {
  id: number;
  name: string;
}
const Cart: FC = () => {
  return (
    <HStack h="100vh" w="100vw">
      <VStack
        alignItems="flex-start"
        h="100%"
        p="2rem 8rem"
        flex="1.5"
      >
        <HStack w="100%" justifyContent="space-between">
          <Text fontSize="xxx-large">Cart</Text>
          <Popover content={TooltipContent} placement="right">
            <Text></Text>
            <ClearItem />
          </Popover>
        </HStack>
        <HStack color="blackAlpha.600" fontWeight="bold" w="100%"></HStack>
        <CardProperies />
        <Divider orientation="horizontal" />
        <CartProducts />
      </VStack>
      <Box
        h="100%"
        w="100%"
        display="flex"
        justifyContent="center"
        p="4rem 1rem"
        flex="0.5"
      >
        <CheckOut />
      </Box>
    </HStack>
  );
};

export default Cart;

export const CardProperies = () => {
  const items = [
    {
      id: 1,
      name: "PRODUCT",
    },
    {
      id: 2,
      name: "QUANTITY",
    },
    {
      id: 3,
      name: "PRICE",
    },
  ];

  const styleProps = {
    justifyContent: "flex-start",
  };

  return (
    <HStack w="100%">
      {items?.map((item: CartCategoryProps) => (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flex="1"
          style={item?.id === 1 ? styleProps : {}}
          key={item?.id}
        >
          <Text fontWeight="bold" letterSpacing="0.6px" color="blackAlpha.700">
            {item?.name}
          </Text>
        </Box>
      ))}
    </HStack>
  );
};

export const CartProducts = () => {
  const products = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 },
    },
    {
      id: 3,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 4,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 },
    },
    {
      id: 5,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 6,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 },
    },
  ];
  return (
    <VStack width="100%" gap="2rem" overflowY="auto">
      {products?.map((product: ProductProps) => (
        <>
          <HStack
            key={product?.id}
            w="100%"
            alignItems="flex-start"
            pt="2rem"
            justifyContent="center"
          >
            <HStack w="10rem" alignItems="flex-start" gap="1rem" flex="1">
              <img src={product?.image} width="20%" alt="product-image" />
              <Text
                fontWeight="bold"
                color="blackAlpha.600"
                pt="4"
                fontSize="sm"
              >
                {product?.title}
              </Text>
            </HStack>
            <VStack flex="1">
              <QuantityBar width="9rem" />
              <ClearItem />
            </VStack>
            <Box
              display="flex"
              flex="1"
              justifyContent="center"
              alignItems="center"
            >
              <Text fontWeight="bold">$ {product?.price}</Text>
            </Box>
          </HStack>
          <Divider />
        </>
      ))}
    </VStack>
  );
};

const searchHandler = () => {
  
}
export const CheckOut = () => {
  return (
    <VStack
      w="20rem"
      gap="0.5rem"
      h="20rem"
      border="1px solid"
      borderColor="blackAlpha.300"
      p="2rem"
      borderRadius="0.25rem"
    >
      <HStack justifyContent="space-between" alignItems="center" w="100%">
        <Text>SubTotal</Text>
        <Text> $ 20000</Text>
      </HStack>
      <CustomInput width="100%" onChange={searchHandler}/>
      <HStack justifyContent="space-between" w="100%">
        <Text>Discount</Text>
        <Text> $ 2000</Text>
      </HStack>
      <HStack justifyContent="space-between" w="100%">
        <Text>Grand Total</Text>
        <Text> $ 2000</Text>
      </HStack>
      <Button w="90%">CheckOut Now</Button>
    </VStack>
  );
};


export const ClearItem = () => {
  return (
    <HStack>
      <CgTrash />
      <Text>Remove</Text>
    </HStack>
  )
}

export const TooltipContent = () => {
  return (
    <Text>Clear all items</Text>
  )
}