import React, { useState, useEffect } from "react";
import Issue from "./Issue";
import CreateForm from "./CreateForm";
import ShowIssueDialog from "./ShowIssueDialog";
import Grid from "@material-ui/core/Grid";
import {
  fetchIssues,
  postIssue,
  deleteIssue,
  patchIssue,
} from "../actions/issues";

const Todo = () => {
  const [issues, setIssues] = useState([]);
  const [createIssue, setCreateIssue] = useState("");
  const [showIssue, setShowIssue] = useState(null);
  const [isOpenShowIssueDialog, setIsOpenShowIssueDialog] = useState(false);

  useEffect(() => {
    fetchIssues().then((response) => setIssues(response.data));
  }, []);

  const createNewIssue = () => {
    postIssue({
      name: createIssue,
    })
      .then((response) => {
        setIssues([...issues, response.data]);
        resetTextField();
      })
      .catch((error) => {
        console.error("registration error!!!", error);
      });
  };

  const resetTextField = () => {
    setCreateIssue("");
  };

  const destroyIssue = (id) => {
    deleteIssue(id)
      .then((response) => {
        setIssues(issues.filter((issue) => issue.id !== response.data.id));
      })
      .catch((error) => {
        console.error("delete error!!!", error);
      });
  };

  const handleClose = () => {
    setIsOpenShowIssueDialog(false);
  };

  const updateIssue = (id, name) => {
    patchIssue(id, {
      name: name,
    })
      .then((response) => {
        issues.forEach(function (issue, index, preventIssues) {
          if (issue.id === id) {
            const newIssues = preventIssues.slice();
            newIssues[index] = response.data;
            setIssues(newIssues);
          }
        });
      })
      .catch((error) => {
        console.error("Update error!!!", error);
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
            destroyIssue={destroyIssue}
            setShowIssue={setShowIssue}
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
