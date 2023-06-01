import React, { FC } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import ProductCard from "../ProductCard";
import { ProductProps } from "../../utils/helper";

interface ProductListProps {
    productList : ProductProps[];
}

const ProductsList: FC<ProductListProps> = (props) => {
    const { productList } = props;
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      rowGap="2rem"
      columnGap="2rem"
      p="4rem"
    >
      {productList?.map((product: ProductProps) => (
        <GridItem key={product?._id}>
          <ProductCard {...product} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default ProductsList;
