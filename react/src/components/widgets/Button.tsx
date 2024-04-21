import React from "react";
import styled from "styled-components";

function Button(props: any) {
    let backgroundColor;
    let fontColor;
    let cursor = "pointer";
    let border = "1px solid transparent";

    const typeColor = (btnType: string) => {
        switch (btnType) {
            case "primary":
                backgroundColor = "#1677ff";
                border = "1px solid #1677ff";
                fontColor = "white";
                break;
            case "default":
                backgroundColor = "#ffffff";
                border = "1px solid #d9d9d9;";
                break;
            case "success":
                backgroundColor = "#27bb22";
                border = "1px solid #27bb22";
                fontColor = "white";
                break;
            case "warning":
                backgroundColor = "#ffcb0f";
                border = "1px solid #ffcb0f";
                fontColor = "white";
                break;
            case "danger":
                backgroundColor = "#ee1105";
                border = "1px solid #ee1105";
                fontColor = "white";
                break;
            case "disabled":
                backgroundColor = "#rgba(0,0,0,.04)";
                fontColor = "rgba(0,0,0,.25)";
                cursor = "not-allowed";
                border = "1px solid #d9d9d9";
                break;
            default:
                return (
                    (backgroundColor = "#919191"),
                    (border = "1px solid #919191"),
                    (fontColor = "white")
                );
        }
    };

    typeColor(props.btnType);

    return (
        <$Button
            onClick={props.onClick}
            propsBgColor={backgroundColor}
            Propscolor={fontColor}
            propsCursor={cursor}
            propsBorder={border}
        >
            {props.children}
        </$Button>
    );
}

export default Button;

interface PropsValue {
    propsWidth?: string;
    propsHeight?: string;
    propsBgColor?: string;
    Propscolor?: string;
    propsCursor?: string;
    propsBorder?: string;
}

const $Button = styled.button<PropsValue>`
    outline: none;
    border-radius: 4px;
    margin-right: 2px;
    padding: 0.3rem;
    height: 30px;
    cursor: ${(props) => props.propsCursor};
    width: ${(props) => props.propsWidth};
    height: ${(props) => props.propsHeight};
    background-color: ${(props) => props.propsBgColor};
    color: ${(props) => props.Propscolor};
    border: ${(props) => props.propsBorder};
`;
