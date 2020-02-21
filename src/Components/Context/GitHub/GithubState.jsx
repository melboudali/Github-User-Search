import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./GithubContext";
import GitHubReducer from "./GithubReducer";

import {
  SEARCH_USERS,
  SEARCH_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
  SEARCH_ALL_USERS,
  STATUSCODE
} from "../Types";

let githubClientID;
let githubClientSecret;

if (process.env.NODE_ENV) {
  githubClientID = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientID = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: { message: null, type: null },
    ResultCount: 0,
    joined: [],
    statusCode: 0
  };

  const [state, dispatch] = useReducer(GitHubReducer, initialState);

  //Get All Users For Home Page
  const searchAllUsers = async () => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users?client_id=${githubClientID}&client_secret=${githubClientSecret}`
    );
    dispatch({ type: SEARCH_ALL_USERS, payload: res.data });
  };

  //Get Users By Value Entered
  const searchUsers = async value => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${value}&client_id=${githubClientID}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: [res.data.items, res.data.total_count]
    });
  };

  //Get Single User By Login
  const searchUser = login => {
    setLoading();
    axios
      .get(`https://api.github.com/users/${login}`, {
        params: {
          client_id: githubClientID,
          client_secret: githubClientSecret
        }
      })
      .then(res => dispatch({ type: SEARCH_USER, payload: res }))
      .catch(err => {
        dispatch({ type: STATUSCODE, payload: err.status });
      })
      .finally(() => {});
  };

  //Get Last User Repos (handle error later)
  const getRepos = async userName => {
    setLoading();
    const repos = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=8&sort=created:asc&client_id=${githubClientID}&client_secret=${githubClientSecret}`
    );
    dispatch({ type: GET_REPOS, payload: repos.data });
  };

  //Clear Users Button
  const clearUsers = () => {
    if (state.users.length > 0) {
      dispatch({ type: CLEAR_USERS });
    }
  };

  //Set Loading To False
  const setLoading = () => dispatch({ type: SET_LOADING });

  //Set Alert (Show Alert For 3s)
  const setAlert = (message, type) => {
    if (message.length > 0) {
      dispatch({ type: SET_ALERT, payload: { message, type } });
    }
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        ResultCount: state.ResultCount,
        alert: state.alert,
        joined: state.joined,
        statusCode: state.statusCode,
        searchAllUsers,
        searchUsers,
        searchUser,
        getRepos,
        setAlert,
        clearUsers
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
