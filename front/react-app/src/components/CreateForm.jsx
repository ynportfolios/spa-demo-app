import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

const CreateForm = ({ createIssue, setCreateIssue, createNewIssue }) => {
  return (
    <React.Fragment>
      <Grid container justify="center"></Grid>
      <Grid item xs={12}>
        <TextField
          label="name"
          value={createIssue}
          onChange={(e) => setCreateIssue(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Box my={5}>
          <Button variant="contained" color="primary" onClick={createNewIssue}>
            CREATE
          </Button>
        </Box>
      </Grid>
    </React.Fragment>
  );
};
CreateForm.propTypes = {
  createIssue: PropTypes.string,
  setCreateIssue: PropTypes.func,
  createNewIssue: PropTypes.func,
};

export default CreateForm;
