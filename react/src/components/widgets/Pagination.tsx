import React, { useState } from "react";
import styled from "styled-components";

const Pagination = ({ postsPerPage, totalPosts, paginate, page }: any) => {
    const pageNumbers = [];
    const numPages = Math.ceil(totalPosts / postsPerPage);
    const [select, setSelect] = useState<number>(1);
    const [currPage, setCurrPage] = useState(page);

    let firstNum = currPage - (currPage % 5) + 1;
    let lastNum = currPage - (currPage % 5) + 5;

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <div>
                <PageUl className="pagination">
                    <MoveButton
                        disabled={page === 1}
                        onClick={() => {
                            paginate(page - 1);
                            setCurrPage(page - 2);
                            setSelect(page - 1);
                        }}
                    >
                        &lt;
                    </MoveButton>
                    <PageLi
                        onClick={() => {
                            paginate(firstNum);
                            setSelect(firstNum);
                        }}
                    >
                        <PageSpan
                            className={select == firstNum ? "active" : ""}
                        >
                            {firstNum}
                        </PageSpan>
                    </PageLi>
                    {Array(4)
                        .fill(1)
                        .map((_, i) => {
                            if (i <= 2) {
                                return (
                                    <PageLi
                                        key={i + 1}
                                        onClick={() => {
                                            paginate(firstNum + 1 + i);
                                            setSelect(firstNum + 1 + i);
                                        }}
                                    >
                                        <PageSpan
                                            className={
                                                select == firstNum + i + 1
                                                    ? "active"
                                                    : ""
                                            }
                                        >
                                            {firstNum + 1 + i}
                                        </PageSpan>
                                    </PageLi>
                                );
                            } else if (i >= 3) {
                                return (
                                    <PageLi
                                        key={i + 1}
                                        onClick={() => {
                                            paginate(lastNum);
                                            setSelect(lastNum);
                                        }}
                                    >
                                        <PageSpan
                                            className={
                                                select == lastNum
                                                    ? "active"
                                                    : ""
                                            }
                                        >
                                            {lastNum}
                                        </PageSpan>
                                    </PageLi>
                                );
                            }
                        })}
                    <MoveButton
                        disabled={page === numPages}
                        onClick={() => {
                            paginate(page + 1);
                            setCurrPage(page);
                            setSelect(page + 1);
                        }}
                    >
                        &gt;
                    </MoveButton>
                </PageUl>
            </div>
        </div>
    );
};

export default Pagination;

const PageUl = styled.ul`
    float: left;
    list-style: none;
    text-align: center;
    border-radius: 3px;
    color: #040404;
    padding: 1px;
    background-color: rgba(255, 255, 255, 0.4);
`;

const PageLi = styled.li`
    display: inline-block;
    font-size: 17px;
    font-weight: 600;
    padding: 5px;
    border-radius: 5px;
    width: 25px;
    &:hover {
        cursor: pointer;
        color: #002bba;
    }
    &:focus::after {
        color: #002bba;
    }
    .active {
        color: white;
        background-color: #1f2949;
    }
`;

const PageSpan = styled.span`
    padding: 5px;
    display: block;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    &:hover::after,
    &:focus::after {
        color: white;
        background-color: #1f2949;
    }
    .active {
        color: white;
        background-color: #1f2949;
    }
`;

const MoveButton = styled.button`
    margin-left: 1rem;
    margin-right: 1rem;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    transform: scale(1.5);
    :hover {
        transform: scale(1.7);
    }
`;
