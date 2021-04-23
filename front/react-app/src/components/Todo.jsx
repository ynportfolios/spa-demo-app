import React, { useState, useEffect } from "react";
import Issue from "./Issue";
import CreateForm from "./CreateForm";
import ShowIssueDialog from "./ShowIssueDialog";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

const Todo = () => {
  const [issues, setIssues] = useState([]);
  const [createIssue, setCreateIssue] = useState("");
  const [showIssue, setShowIssue] = useState(null);
  const [isOpenShowIssueDialog, setIsOpenShowIssueDialog] = useState(false);

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
        setIssues([...issues, response.data]);
        resetTextField();
      })
      .catch((error) => {
        console.log("registration error!!!", error);
      });
  };

  const resetTextField = () => {
    setCreateIssue("");
  };

  const deleteIssue = (id) => {
    axios
      .delete(`http://localhost:3000/issues/${id}`)
      .then((response) => {
        setIssues(issues.filter((issue) => issue.id !== response.data.id));
      })
      .catch((error) => {
        console.log("delete error!!!", error);
      });
  };

  const getIssue = (id) => {
    axios.get(`http://localhost:3000/issues/${id}`).then((response) => {
      setShowIssue(response.data);
    });
  };

  const handleClose = () => {
    setIsOpenShowIssueDialog(false);
  };

  const updateIssue = (id, name) => {
    axios
      .patch(`http://localhost:3000/issues/${id}`, {
        name: name,
      })
      .then((response) => {
        issues.forEach(function (issue, index, issues) {
          if (issue.id === id) {
            const newIssues = issues.slice();
            newIssues[index] = response.data;
            setIssues(newIssues);
          }
        });
      })
      .catch((error) => {
        console.log("Update error!!!", error);
      });
  };

  return (
    <React.Fragment>
      <CreateForm
        createIssue={createIssue}
        setCreateIssue={setCreateIssue}
        createNewIssue={createNewIssue}
      />
      <Grid container spacing={2}>
        {issues.map((issue) => (
          <Issue
            key={issue.id}
            issue={issue}
            deleteIssue={deleteIssue}
            getIssue={getIssue}
            setIsOpenShowIssueDialog={setIsOpenShowIssueDialog}
            updateIssue={updateIssue}
          />
        ))}
      </Grid>
      {isOpenShowIssueDialog && showIssue && (
        <ShowIssueDialog
          isOpenShowIssueDialog={isOpenShowIssueDialog}
          handleClose={handleClose}
          showIssue={showIssue}
        />
      )}
    </React.Fragment>
  );
};

export default Todo;
