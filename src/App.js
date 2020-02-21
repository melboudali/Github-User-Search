import React, { Fragment, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "./Components/Layouts/Navbar";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import UserPage from "./Components/UserComponent/UserPage";
import NotFound from "./Components/Pages/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubContext from "./Components/Context/GitHub/GithubContext";
import "./App.css";

const App = () => {

  const githubState = useContext(GithubContext);
  const { searchAllUsers } = githubState;

  useEffect(() => {
    searchAllUsers();
    // eslint-disable-next-line
  }, []);
  
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user/:login" component={UserPage} />
            <Route path="/About" component={About} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </Router>
    </Fragment>
  );
};

export default App;
