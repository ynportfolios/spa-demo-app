import React, { useState, useEffect } from "react";
import Issue from "./Issue";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

const Todo = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("http://localhost:3000/issues");
      setIssues(result.data);
    }
    fetchData();
  }, []);

  return (
    <Grid container justify="center" spacing={2}>
      {issues.map((issue) => (
        <Issue issue={issue} key={issue.id} />
      ))}
    </Grid>
  );
};

export default Todo;
