import React, { FC } from 'react'
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi"


interface CustomInputProps {
    width : string
}
const CustomInput: FC<CustomInputProps> = (props) => {
    const { width } = props;
    return (
        <InputGroup w={width}>
            <InputRightElement>
                <BiSearch />
            </InputRightElement>
            <Input type="text"  width={width}/>
        </InputGroup >
    )
}

export default CustomInput
