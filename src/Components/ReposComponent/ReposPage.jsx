import React, { useContext, Fragment } from "react";
import GithubContext from "../Context/GitHub/GithubContext";
import ReposComp from "./ReposComp";

const ReposPage = () => {
  const githubState = useContext(GithubContext);
  const { repos } = githubState;

  return (
    <Fragment>
      {repos.map(repo => (
        <ReposComp key={repo.id} repo={repo} />
      ))}
    </Fragment>
  );
};

export default ReposPage;
