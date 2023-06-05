import React, { FC, useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import ProductsList from "../../components/ProductsList";
import CustomDropdown from "../../components/CustomDropdown";
import CustomInput from "../../components/CustomInput";
import { HStack } from "@chakra-ui/react";
import { useParams } from "react-router";
import axiosInstance from "../../api/axiosInstance";
import { ProductProps } from "../../utils/helper";
import { getFilteredProducts } from "../../utils/helper";

interface FilterProps {
  option: number;
  name: string;
}
const Inventory: FC = () => {
  const { category } = useParams();
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [updatedProducts, setUpdatedProducts] = useState<ProductProps[]>([
    ...products,
  ]);
  const [filter, setFilter] = useState<FilterProps>({ option: -1, name: "" });
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await axiosInstance.get(
          `/products/${category}`
        );
        setProducts(productsResponse?.data);
      } catch (err: any) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [category]);

  useEffect(() => {
    setUpdatedProducts(getFilteredProducts(products, filter.option))
  }, [filter, products]);

  useEffect(() => {
    const _products = products.filter((product) =>
      product?.title?.trim().toLowerCase().includes(search)
    );
    setUpdatedProducts(_products)
  }, [search, products]);

  const searchHandler = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <HStack justifyContent="flex-end" p="1rem 5em" gap="15rem">
        <CustomInput width="lg" onChange={searchHandler} />
        <CustomDropdown filter={filter} setFilter={setFilter} />
      </HStack>
      <ProductsList productList={updatedProducts} />
    </div>
  );
};

export default Inventory;
