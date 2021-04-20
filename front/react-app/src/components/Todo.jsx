import React, { useState, useEffect } from "react";
import Issue from "./Issue";
import CreateForm from "./CreateForm";
import axios from "axios";

const Todo = () => {
  const [issues, setIssues] = useState([]);
  const [createIssue, setCreateIssue] = useState("");

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("http://localhost:3000/issues");
      setIssues(result.data);
    }
    fetchData();
  }, []);

  const createNewIssue = () => {
    axios
      .post("http://localhost:3000/issues", {
        name: createIssue,
      })
      .then((response) => {
        setIssues([
          ...issues,
          {
            id: response.data.id,
            name: response.data.name,
          },
        ]);
        resetTextField();
      })
      .catch((error) => {
        console.log("registration error", error);
      });
  };

  const resetTextField = () => {
    setCreateIssue("");
  };

  return (
    <React.Fragment>
      <CreateForm
        createIssue={createIssue}
        setCreateIssue={setCreateIssue}
        createNewIssue={createNewIssue}
      />
      <Issue issues={issues} />
    </React.Fragment>
  );
};

export default Todo;
