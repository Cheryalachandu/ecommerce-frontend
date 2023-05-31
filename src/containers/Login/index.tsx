import {
  Flex,
  Text,
  Input,
  HStack,
  InputGroup,
  Button,
  VStack,
  InputRightAddon,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { CiWarning } from "react-icons/ci";
import { useForm } from "react-hook-form";
import "./index.css";

interface DataProps {
  name: string;
  password: string;
  mobileNumber: number;
  email: string;
}

const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataProps>();
  const [show, setShow] = useState<boolean>(false);

  const onSubmit = (data: DataProps) => {
    console.log(data);
  };
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <VStack width="100%" alignItems="flex-start">
          <Input
            type="text"
            {...register("name", { required: true })}
            isInvalid={errors?.name ? true : false}
            borderColor={errors?.name && "red.300"}
            placeholder="Name"
          />
          {errors?.name && (
            <HStack>
              <CiWarning fill="red" />
              {<Text color="red.600">Please enter the name</Text>}
            </HStack>
          )}
        </VStack>

        <VStack width="100%" alignItems="flex-start">
          <Input
            type="email"
            {...register("email", { required: true })}
            isInvalid={errors?.email ? true : false}
            borderColor={errors?.email && "red.300"}
            placeholder="Email"
          />
          {errors?.name && (
            <HStack>
              <CiWarning fill="red" />
              {<Text color="red.600">Please enter the Email</Text>}
            </HStack>
          )}
        </VStack>

        <VStack width="100%" alignItems="flex-start">
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              {...register("password", {
                required: true,
                min: 8,
                max: 20,
              })}
              isInvalid={errors?.password ? true : false}
              borderColor={errors?.password && "red.300"}
              placeholder="password"
            />
            <InputRightAddon
              children={show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              onClick={() => setShow((prev) => !prev)}
            />
          </InputGroup>
          {errors?.name && (
            <HStack>
              <CiWarning fill="red" />
              {<Text color="red.600">Please enter the Password</Text>}
            </HStack>
          )}
        </VStack>
        <VStack width="100%" alignItems="flex-start">
          <Input
            type="number"
            {...register("mobileNumber", {
              required: true,
              maxLength: 10,
              minLength: 10,
            })}
            isInvalid={errors.mobileNumber ? true : false}
            borderColor={errors.mobileNumber && "red.300"}
            placeholder="mobile number"
          />
          {errors?.name && (
            <HStack>
              <CiWarning fill="red" />
              {<Text color="red.600">Please enter the Mobile Number</Text>}
            </HStack>
          )}
        </VStack>

        <Flex w="100%" justifyContent="center" alignItems="center">
          <Button width="100%" type="submit">
            Login
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default Login;
