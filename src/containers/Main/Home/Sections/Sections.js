import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Challenges from "../Sections/Challenges/Challenges";
import Projects from "../Sections/Projects/Projects";
import SearchInput from "../../../../components/UI/Inputs/SearchInput/SearchInput";
import Teams from "../Sections/Teams/Teams";

const Sections = (props) => {
  const [search, setSearch] = useState("");

  const filterHandler = (event) => {
    setSearch(event.target.value);
  };

  React.useEffect(() => {
    console.log("[Sections.js] useEffect");
  });

  return (
    <React.Fragment>
      <div>
        <SearchInput
          info="Filter your search based on difficulty or tech you are interested in"
          isSubmitButton={false}
          placeholder="Filter your search"
          value={search}
          handler={filterHandler}
        />
      </div>
      <Switch>
        <Route path="/home/teams">
          <Teams />
        </Route>
        <Route path="/home/projects">
          <Projects />
        </Route>
        <Route path="/home/challenges">
          <Challenges />
        </Route>
        <Redirect to="/home/teams" />
      </Switch>
    </React.Fragment>
  );
};

export default Sections;
