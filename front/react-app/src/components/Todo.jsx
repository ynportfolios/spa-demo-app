import React, { useState, useEffect } from "react";
import Issue from "./Issue";
import axios from "axios";

const Todo = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("http://localhost:3000/issues");
      setIssues(result.data);
    }
    fetchData();
  }, []);

  return <Issue issues={issues} />;
};

export default Todo;
