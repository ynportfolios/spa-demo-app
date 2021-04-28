import axios from "axios";
import { issues, issuesWithId } from "../urls/index";

export const fetchIssues = () => {
  return axios.get(issues);
};

export const postIssue = (attributes) => {
  return axios.post(issues, attributes);
};

export const deleteIssue = (id) => {
  return axios.delete(issuesWithId(id));
};

export const patchIssue = (id, attributes) => {
  return axios.patch(issuesWithId(id), attributes);
};
