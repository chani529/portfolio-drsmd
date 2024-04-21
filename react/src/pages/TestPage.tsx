import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataTables } from "@components/widgets/DataTable";
import Testpage2 from "@pages/TestPage2";
import apis from "@apis";

function TestPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const coulums = ["userId", "id", "body", "title"];

  useEffect(() => {
    const test = apis.Base.getDataList();
    console.log(test);
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ width: "80%" }}>
        <h3>input, select, button, modal</h3>
        <Testpage2 />
      </div>
      <div style={{ width: "80%" }}>
        <h3>table, pagination</h3>
        <DataTables columns={coulums} dataList={posts} />
      </div>
    </div>
  );
}
export default TestPage;
