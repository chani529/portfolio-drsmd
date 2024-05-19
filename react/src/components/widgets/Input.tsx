import React from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";

interface InputProps {
  name: string;
  rules?: object;
  type?: string;
  width?: string;
  height?: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

function Input({
  name,
  rules,
  type = "text",
  width,
  height,
  disabled,
  onChange,
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <CustomInput
        {...register(name, rules)}
        type={type}
        disabled={disabled}
        onChange={onChange}
        propsWidth={width}
        propsHeight={height}
      />
      <ErrorMessage>
        {errors[name] ? errors[name]?.message?.toString() : ""}
      </ErrorMessage>
    </>
  );
}
export default Input;

interface PropsValue {
  propsWidth?: string;
  propsHeight?: string;
}

const CustomInput = styled.input<PropsValue>`
  outline: none;
  border: #a6a6a6dd 1px solid;
  padding: 0.3rem;
  border-radius: 5px;
  width: ${(props) => props.propsWidth || "100%"};
  height: ${(props) => props.propsHeight || "100%"};

  font-size: inherit;
  line-height: inherit;

  background: #f8f8f8;
  border: 1.5px solid black;
  border-radius: 8px;
  outline: none;
  padding: 8px 16px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.8rem;
  height: 1rem;
  margin: 0.2rem 0 0.2rem 0;
`;
