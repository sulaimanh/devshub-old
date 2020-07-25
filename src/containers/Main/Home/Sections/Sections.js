import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Challenges from "../Sections/Challenges/Challenges";
import Projects from "../Sections/Projects/Projects";
import SearchInput from "../../../../components/UI/Inputs/SearchInput/SearchInput";
import Spinner from "../../../../components/UI/Spinner/Spinner";
import Teams from "../Sections/Teams/Teams";
import usePosts from "../../../../hooks/usePosts";
import { useRouteMatch } from "react-router-dom";

const Sections = (props) => {
  const [cards, setCards] = useState([]);

  const [search, setSearch] = useState("");
  const match = useRouteMatch("/home/:section");
  const { isLoading, isError, data, error } = usePosts(match.params.section);

  const filterHandler = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (data) {
      setCards(data);
    }
  }, [data]);

  console.log(isLoading, isError, data, error);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>There is an error</h1>;
  }

  return (
    <React.Fragment>
      <div>
        <SearchInput
          info='Filter your search based on difficulty or tech you are interested in'
          isSubmitButton={false}
          placeholder='Filter your search'
          value={search}
          handler={filterHandler}
        />
      </div>
      <Switch>
        <Route path='/home/projects'>
          <Projects cards={cards} />
        </Route>
        <Route path='/home/challenges'>
          <Challenges cards={cards} />
        </Route>
        <Route path='/home/teams'>
          <Teams cards={cards} />
        </Route>
        <Redirect to='/home/teams' />
      </Switch>
    </React.Fragment>
  );
};

export default Sections;
