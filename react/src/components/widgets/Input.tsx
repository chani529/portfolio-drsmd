import React from "react";
import styled from "styled-components";

function Input(props: any) {
    const { onChange, width, heigth, disabled } = props;
    return (
        <$Input
            disabled={disabled && true}
            onChange={onChange}
            propsWidth={width}
            propsHeight={heigth}
        />
    );
}

export default Input;

interface PropsValue {
    propsWidth?: string;
    propsHeight?: string;
}

const $Input = styled.input<PropsValue>`
    outline: none;
    border: #a6a6a6dd 1px solid;
    padding: 0.3rem;
    border-radius: 5px;
    width: ${(props) => props.propsWidth};
    height: ${(props) => props.propsHeight};
`;
