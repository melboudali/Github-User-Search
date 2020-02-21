import React, { Fragment, useContext } from "react";
import Row from "react-bootstrap/Row";
import UserComp from "./UserCardComp";
import GithubContext from "../Context/GitHub/GithubContext";
import Spinner from "../Layouts/Spinner";

const Users = () => {

  const githubState = useContext(GithubContext);
  const { users, ResultCount, loading } = githubState;
  
  return (
    <Fragment>
      {ResultCount > 30 && <h6>{ResultCount} users found.</h6>}
      {loading ? (
        <Spinner />
      ) : (
        <Row>
          {users.map(user => (
            <UserComp key={user.id} user={user} />
          ))}
        </Row>
      )}
    </Fragment>
  );
};
export default Users;
