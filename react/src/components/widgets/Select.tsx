import React from "react";
import styled from "styled-components";

function Select(props: any) {
    const { onChange, width, heigth, disabled } = props;
    return (
        <$Select
            disabled={disabled && true}
            onChange={onChange}
            propsWidth={width}
            propsHeight={heigth}
        >
            {props.children}
        </$Select>
    );
}

export default Select;

interface PropsValue {
    propsWidth?: string;
    propsHeight?: string;
}

const $Select = styled.select<PropsValue>`
    outline: none;
    border: #a6a6a6dd 1px solid;
    padding: 0.3rem;
    border-radius: 5px;
    font-size: 0.9rem;
    width: ${(props) => props.propsWidth};
    height: ${(props) => props.propsHeight};
`;
