import React from "react";
import styled from "styled-components";
import Button from "./Button";

function Modal(props: any) {
    const { open, close, header, type, onClick } = props;
    return (
        <$Modal open={open}>
            <section>
                <header>
                    {header}
                    <$Button onClick={close}>&times;</$Button>
                </header>
                <main>{props.children}</main>
                <footer>
                    <Button btnType={"default"} onClick={close}>
                        {type == "default" ? "닫기" : "취소"}
                    </Button>
                    {type == "okCancle" && (
                        <Button btnType={"primary"} onClick={onClick}>
                            확인
                        </Button>
                    )}
                </footer>
            </section>
        </$Modal>
    );
}

export default Modal;

interface modal {
    open: any;
}
const $Modal = styled.div<modal>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);

    /** 열렸을때  */
    display: ${(props) => props.open && "flex"};
    align-items: ${(props) => props.open && "center"};
    animation: ${(props) => props.open && "modal-bg-show 0.3s"};
    @keyframes modal-show {
        from {
            opacity: 0;
            margin-top: -50px;
        }
        to {
            opacity: 1;
            margin-top: 0;
        }
    }
    @keyframes modal-bg-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    section {
        width: 90%;
        max-width: 450px;
        margin: 0 auto;
        border-radius: 0.3rem;
        background-color: #fff;
        animation: modal-show 0.3s;
        overflow: hidden;
    }
    header {
        position: relative;
        padding: 13px 64px 13px 16px;
        background-color: #f1f1f1;
        font-weight: 500;
    }
    main {
        padding: 16px;
        border-bottom: 1px solid #dee2e6;
        border-top: 1px solid #dee2e6;
    }
    footer {
        padding: 12px 15px;
        text-align: right;
    }
    footer > button {
        padding: 6px 12px;
        font-size: 13px;
    }
`;

const $Button = styled.button`
    position: absolute;
    top: 10px;
    right: 15px;
    width: 30px;
    font-size: 21px;
    font-weight: 700;
    text-align: center;
    color: #999;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;
