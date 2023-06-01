import React, { FC } from 'react'
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi"


interface CustomInputProps {
    width: string,
    onChange :  React.ChangeEventHandler<HTMLInputElement>
}
const CustomInput: FC<CustomInputProps> = (props) => {
    const { width, onChange } = props;
    return (
        <InputGroup w={width}>
            <Input type="text" width={width} onChange={(e) => onChange(e)}/>
            <InputRightAddon>
                <BiSearch />
            </InputRightAddon>
        </InputGroup >
    )
}

export default CustomInput
