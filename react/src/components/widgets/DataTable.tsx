import React, { useState } from "react";
import styled from "styled-components";
import Pagination from "./Pagination";
import Select from "./Select";

export const DataTables = ({ columns, dataList }: any) => {
    const [perPage, setPerpage] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * perPage;

    const handlePerPageChange = (_perPage: number) => {
        setPerpage(_perPage);
    };

    return (
        <>
            <TableHeader>
                <div style={{ display: "flex" }}>
                    <div>
                        <Label htmlFor="perpage">보기</Label>
                        <Select
                            id="perpage"
                            onChange={(e: BaseSyntheticEvent) =>
                                handlePerPageChange(Number(e.target.value))
                            }
                        >
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={25}>25</option>
                        </Select>
                    </div>
                </div>
            </TableHeader>
            <Table>
                <thead>
                    <tr>
                        {columns?.map((column: any, i: number) => {
                            return <Th key={i}>{column}</Th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {dataList?.length > 0 ? (
                        (dataList?.slice(offset, offset + perPage) || []).map(
                            (data: any, index: number) => {
                                return (
                                    <tr key={index.toString()}>
                                        {columns.map(
                                            (column: any, i: number) => {
                                                return (
                                                    <Td key={i}>
                                                        {data[column]}
                                                    </Td>
                                                );
                                            }
                                        )}
                                    </tr>
                                );
                            }
                        )
                    ) : (
                        <tr>
                            <td>{"데이터가 없습니다"}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <PaginationDiv className="patient-pagination">
                <Pagination
                    postsPerPage={perPage} //보여줄 limit 값
                    totalPosts={dataList.length} // total 값
                    paginate={setPage} // 페이지 셋팅함수
                    page={page} // 기본 페이지
                />
            </PaginationDiv>
        </>
    );
};

const TableHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

const Label = styled.label`
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    text-align: center;
    margin-right: 0.5rem;
`;

const Table = styled.table`
    border-collapse: collapse;
    border-radius: 8px;
    text-align: center;
    width: 100%;
    border-radius: 5px;
    border-style: hidden;
    /* box-shadow: 0 0 0 1px #dddd; */
    box-shadow: 0px 1px 1px -0.5px #dddd;
    overflow: hidden;
`;

const Th = styled.th`
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    border-bottom: 1px solid #dddd;
    padding: 1rem;
    background-color: #fafafa;
    position: relative;
    ::after {
        content: "|";
        color: #ddd;
        float: right;
        margin-right: -17px;
    }
    :last-child::after {
        content: "";
    }
`;

const Td = styled.td`
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    padding: 0.4rem;
    border-bottom: 1px solid #dddd;
    padding-left: 1rem;
    padding-right: 1rem;
`;

const PaginationDiv = styled.div`
    display: flex;
    justify-content: flex-end;
`;

interface BaseSyntheticEvent<E = object, C = any, T = any> {
    nativeEvent: E;
    currentTarget: C;
    target: T;
    bubbles: boolean;
    cancelable: boolean;
    defaultPrevented: boolean;
    eventPhase: number;
    isTrusted: boolean;
    preventDefault(): void;
    isDefaultPrevented(): boolean;
    stopPropagation(): void;
    isPropagationStopped(): boolean;
    persist(): void;
    timeStamp: number;
    type: string;
}
