import React, { FC, useState } from "react";
import Navbar from "../../components/Navbar";

// import ProductCard from "./ProductCard";

import CustomDropdown from "../../components/CustomDropdown";
import CustomInput from "../../components/CustomInput"

interface FilterProps {
    option : number,
    name : string
}
const Inventory: FC = () => {
    const [filter, setFilter] = useState<FilterProps>({ option: -1, name: "" });
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
           
           <CustomInput  width="90%"/>

            <CustomDropdown
                filter={filter}
                setFilter={setFilter}
            />
        </div>
    );
};

export default Inventory;
