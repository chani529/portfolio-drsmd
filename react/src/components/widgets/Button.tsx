import React from "react";
import styled from "styled-components";

interface ButtonProps {
  btnType?:
    | "primary"
    | "default"
    | "success"
    | "warning"
    | "danger"
    | "disabled";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  width?: string;
  height?: string;
  children?: React.ReactNode;
}

function Button({
  btnType = "default",
  onClick,
  type = "button",
  width,
  height,
  children,
}: ButtonProps) {
  let backgroundColor;
  let fontColor;
  let cursor = "pointer";
  let border = "1px solid transparent";
  let hoverBgColor;
  let hoverBorder;

  const typeColor = (btnType: string) => {
    switch (btnType) {
      case "primary":
        backgroundColor = "#1677ff";
        border = "1px solid #1677ff";
        fontColor = "white";
        hoverBgColor = "#135abc";
        hoverBorder = "1px solid #135abc";
        break;
      case "default":
        backgroundColor = "#ffffff";
        border = "1px solid #d9d9d9";
        hoverBgColor = "#f5f5f5";
        hoverBorder = "1px solid #d9d9d9";
        break;
      case "success":
        backgroundColor = "#27bb22";
        border = "1px solid #27bb22";
        fontColor = "white";
        hoverBgColor = "#219c1a";
        hoverBorder = "1px solid #219c1a";
        break;
      case "warning":
        backgroundColor = "#ffcb0f";
        border = "1px solid #ffcb0f";
        fontColor = "white";
        hoverBgColor = "#e0b00d";
        hoverBorder = "1px solid #e0b00d";
        break;
      case "danger":
        backgroundColor = "#ee1105";
        border = "1px solid #ee1105";
        fontColor = "white";
        hoverBgColor = "#c10e04";
        hoverBorder = "1px solid #c10e04";
        break;
      case "disabled":
        backgroundColor = "rgba(0,0,0,.04)";
        fontColor = "rgba(0,0,0,.25)";
        cursor = "not-allowed";
        border = "1px solid #d9d9d9";
        hoverBgColor = "rgba(0,0,0,.04)";
        hoverBorder = "1px solid #d9d9d9";
        break;
      default:
        backgroundColor = "#919191";
        border = "1px solid #919191";
        fontColor = "white";
        hoverBgColor = "#7a7a7a";
        hoverBorder = "1px solid #7a7a7a";
    }
  };

  typeColor(btnType);

  return (
    <CustomButton
      onClick={onClick}
      propsBgColor={backgroundColor}
      propsHoverBgColor={hoverBgColor}
      propsHoverBorder={hoverBorder}
      propsColor={fontColor}
      propsCursor={cursor}
      propsBorder={border}
      type={type}
      width={width}
      height={height}
    >
      {children}
    </CustomButton>
  );
}

export default Button;

interface PropsValue {
  width?: string;
  height?: string;
  propsBgColor?: string;
  propsHoverBgColor?: string;
  propsHoverBorder?: string;
  propsColor?: string;
  propsCursor?: string;
  propsBorder?: string;
}

const CustomButton = styled.button<PropsValue>`
  outline: none;
  padding: 6px 20px;
  border-radius: 4px;
  margin-right: 2px;
  cursor: ${(props) => props.propsCursor};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  background-color: ${(props) => props.propsBgColor};
  color: ${(props) => props.propsColor};
  border: ${(props) => props.propsBorder};

  &:hover {
    background-color: ${(props) => props.propsHoverBgColor};
    border: ${(props) => props.propsHoverBorder};
  }
`;
