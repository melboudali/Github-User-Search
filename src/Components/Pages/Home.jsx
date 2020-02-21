import React, { Fragment } from "react";
import Search from "../Layouts/Search";
import Users from "../UserComponent/Users";

const Home = () => {
  return (
    <Fragment>
      {/* Search */}
      <Search />
      {/* Users */}
      <Users />
    </Fragment>
  );
};

export default Home;
