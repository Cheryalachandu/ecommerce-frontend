import React from "react";
import Navbar from "./Navbar";
// import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
// import ProductCard from "./ProductCard";
// import { BiSearch } from "react-icons/bi"
import CustomDropdown from "./CustomDropdown";

const Inventory = () => {
    // const product =
    // {
    //     id: 1,
    //     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //     price: 109.95,
    //     description:
    //         "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //     category: "men's clothing",
    //     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //     rating: { rate: 3.9, count: 120 },
    // }
    return (
        <div>
            <Navbar />
            {/* <ProductCard
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.image}
            /> */}
            {/* <InputGroup w="20rem">
                <InputRightElement>
                    <BiSearch />
                </InputRightElement>
                <Input type="text" />
            </InputGroup> */}


            <CustomDropdown />
        </div>
    );
};

export default Inventory;
