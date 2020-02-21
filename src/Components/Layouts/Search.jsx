import React, { Fragment, useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "./Alert";
import GithubContext from "../Context/GitHub/GithubContext";

const Search = () => {
  
  const githubState = useContext(GithubContext);
  const { setAlert, users, clearUsers, searchUsers } = githubState;
  const [getValue, setValue] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    if (!getValue) {
      setAlert(" Enter Something Please!", "danger");
    } else {
      searchUsers(getValue);
      setValue("");
    }
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  const clearBtn = () => {
    if (users.length > 0) {
      return (
        <Button variant="outline-danger" block onClick={clearUsers}>
          Clear
        </Button>
      );
    }
  };

  return (
    <Fragment>
      <h4 className="searchHeader">GitHub User Search</h4>
      <Alert />
      <Form className="searchForm" onSubmit={onSubmit}>
        <Form.Group>
          <Form.Control
            className="searchInput"
            type="text"
            placeholder="Enter Something ..."
            size="lg"
            onChange={onChange}
            value={getValue}
            autoCapitalize="off"
            autoCorrect="off"
            autoComplete="off"
          />
        </Form.Group>
        <div className="searchButtons">
          <Button variant="outline-success" type="submit" block>
            Search
          </Button>
          {clearBtn()}
        </div>
      </Form>
    </Fragment>
  );
};

export default Search;
