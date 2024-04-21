import React from "react";
import styled from "styled-components";
import Input from "./Input";

function Form(props: any) {
    const { name, inputId, required, vertical } = props;
    return (
        <>
            <$LabelWap vertical={vertical}>
                {required && <$Required>*</$Required>}
                <$Label htmlFor={inputId}>
                    {vertical ? `${name}` : `${name} :`}
                </$Label>
            </$LabelWap>
            <Input id={inputId} />
        </>
    );
}

export default Form;

const $LabelWap = styled.div<{ vertical: string }>`
    display: ${(props) => (props.vertical ? "block" : "inline-block")};
    margin-bottom: ${(props) => (props.vertical ? "0.5rem" : "none")};
`;
const $Label = styled.label`
    margin-right: 0.5rem;
    font-size: 14px;
`;

const $Required = styled.span`
    margin-right: 0.1rem;
    color: red;
`;
