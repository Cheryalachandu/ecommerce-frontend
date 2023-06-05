import { HStack, VStack, Text, Button, Box } from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ProductProps } from "../../utils/helper";
import axiosInstance from "../../api/axiosInstance";
import { BiArrowBack } from "react-icons/bi";

const ProductView = () => {
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const productId = searchParam.get("_id");
  const [product, setProduct] = useState<ProductProps>();
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    const fetchProduct = async () => {
      const productResponse = await axiosInstance.get(
        `/products/product?_id=${productId}`
      );
      setProduct(productResponse?.data[0]);
    };
    fetchProduct();
  }, []);

  return (
    <HStack h="100vh" w="100vw" p="5rem">
      <VStack
        alignItems="center"
        justifyContent="flex-start"
        gap="10rem"
        flex="1"
        h="100%"
      >
        <Box w="100%" onClick={() => navigate(-1)} cursor="pointer">
          <BiArrowBack transform="scale(2)" />
        </Box>
        <img src={product?.image} width="50%" />
      </VStack>
      <VStack
        h="100%"
        w="50%"
        justifyContent="space-around"
        gap="2rem"
        flex="1"
        p="2rem"
      >
        <VStack alignItems="flex-start" gap="1.5rem">
          <Text fontSize="xx-large" fontWeight="bold" lineHeight="1.3">
            {product?.title}
          </Text>
          <Text color="red.600" fontSize="x-large" fontWeight="bold">
            $ {product?.price}
          </Text>
          {/* radar for items Left*/}
          <Text fontWeight="bold" fontSize="medium">
            {product?.rating.count} item left
          </Text>
          <VStack alignItems="flex-start">
            <Text fontWeight="bold">Description</Text>
            <Text>{product?.description}</Text>
          </VStack>
        </VStack>
        <VStack w="100%" p="3em 0rem" backgroundColor="gray.50" gap="1rem">
          <QuantityBar width="90%" />
          <Button w="90%">Buy Now</Button>
          <HStack>
            <Button leftIcon={<FiShoppingCart />}>Add to Cart</Button>
            <Button leftIcon={<FcLike fill="blackAlpha.500" />}>
              WishList
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </HStack>
  );
};

export default ProductView;

interface QuantityBarProps {
  width: string;
}

export const QuantityBar: FC<QuantityBarProps> = (props) => {
  const [quantity, setQuantity] = useState<number>(0);
  const { width } = props;
  return (
    <HStack
      cursor="pointer"
      border="1px solid"
      borderColor="blackAlpha.400"
      w={width}
      p="0.5rem"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="0.25rem"
      backgroundColor="#ffffff"
    >
      <AiOutlineMinus
        onClick={() => setQuantity((quantity) => quantity - 1)}
        style={{ pointerEvents: quantity === 0 ? "none" : "all" }}
      />
      <Text>{quantity}</Text>
      <AiOutlinePlus onClick={() => setQuantity((quantity) => quantity + 1)} />
    </HStack>
  );
};
