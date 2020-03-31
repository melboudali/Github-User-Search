import React, { Fragment, useEffect, useContext } from "react";
import ReposPage from "../ReposComponent/ReposPage";
import NotFound from "../Pages/NotFound";
import { Link } from "react-router-dom";
import GithubContext from "../Context/GitHub/GithubContext";
import Spinner from "../Layouts/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const UserPage = props => {
  const githubState = useContext(GithubContext);
  const { match } = props;
  const {
    user: {
      name,
      avatar_url,
      followers,
      following,
      location,
      email,
      bio,
      company,
      blog,
      public_repos,
      public_gists,
      html_url,
      hireable
    },
    searchUser,
    loading,
    getRepos,
    joined,
    statusCode
  } = githubState;

  useEffect(() => {
    searchUser(match.params.login);
    getRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const changeTitle = () => {
    document.title = "Github Search";
  };

  return loading ? (
    <Spinner />
  ) : statusCode === 200 ? (
    <Fragment>
      {/* User Info */}
      <Row>
        <div className="hiredContainer">
          <Link to="/">
            <Button variant="light" onClick={changeTitle}>
              <i className="far fa-arrow-alt-circle-left" /> Go Back ...
            </Button>
          </Link>
          <div className="hiredComp">
            {hireable ? (
              <Fragment>
                <i className="fa fa-check-circle-o" />
                <h4 className="hiredText"> Hireable</h4>
              </Fragment>
            ) : (
              <Fragment>
                <i className="fa fa-times-circle-o" />
                <h4 className="hiredText"> Not Hireable</h4>
              </Fragment>
            )}
          </div>
        </div>
      </Row>
      <Row className="userInfoContainer">
        <Col xs="12" sm="12" md="6" lg="6" xl="6">
          <div className="leftUserInfo">
            <img className="userAvatar" src={avatar_url} alt={name} />
            <h2 className="uName">{name}</h2>
            <p className="otherUserInfo">
              <i className="fas fa-users" />
              {` Followers: ${followers}/ Following:
              ${following}`}
            </p>
            {location && (
              <p className="otherUserInfo">
                <i className="fa fa-map-marker" />
                {` ${location}`}
              </p>
            )}
            {joined && (
              <p className="otherUserInfo">
                <i className="far fa-clock" />
                {` Joined ${joined[1]}/${joined[0]}`}
              </p>
            )}
          </div>
        </Col>
        <Col xs="12" sm="12" md="6" lg="6" xl="6">
          <div className="rightUserInfo">
            {email && (
              <p className="otherUserInfoRight">
                <i className="fas fa-at" />
                {` ${email}`}
              </p>
            )}
            {blog && (
              <p className="otherUserInfoRight">
                <i className="fas fa-link" />
                {` ${blog} `}
                {blog.includes("http") ? (
                  <a href={blog} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                ) : (
                  <a
                    href={`http://${blog}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                )}
              </p>
            )}
            {company && (
              <p className="otherUserInfoRight">
                <i className="fas fa-cubes" />
                {` ${company}`}
              </p>
            )}
            {bio && (
              <p className="otherUserInfoRight">
                <i className="fas fa-atlas" />
                <span className="bioTitle">Biography:</span> {` ${bio}`}
              </p>
            )}
            <div className="userButton">
              <Button
                href={html_url}
                target="_blank"
                className="githubBtns"
                variant="dark"
              >
                <i className="fab fa-github" /> My Github
              </Button>
              <Button
                href={`mailto:${email}?subject=Email From Github Finder`}
                target="_blank"
                className="githubBtns"
                variant="warning"
              >
                <i className="fas fa-paper-plane" /> Contact Me
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      {/* User Repos */}
      <Row>
        <div className="reposCon">
          <p className="reposText">
            <i className="fab fa-git-alt" />
            {` Public Repos: ${public_repos} / Gists: ${public_gists}`}
          </p>
        </div>
      </Row>
      <Row>
        <div className="reposContainer">
          {/* Repos Page */}
          <ReposPage />
        </div>
      </Row>
    </Fragment>
  ) : (
    <NotFound />
  );
};

export default UserPage;
