import React, { Fragment, useContext } from "react";
import Alert from "react-bootstrap/Alert";
import GithubContext from "../Context/GitHub/GithubContext";

const AlertComponent = () => {
  
  const githubState = useContext(GithubContext);
  const { alert } = githubState;

  return (
    alert.message && (
      <Fragment>
        <Alert variant={alert.type}>
          <i className="fas fa-exclamation-triangle" />
          {alert.message}
        </Alert>
      </Fragment>
    )
  );
};
export default AlertComponent;
