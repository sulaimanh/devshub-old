import React, { useEffect, useRef, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Challenges from "../Sections/Challenges/Challenges";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { headingSecondary as HeadingSecondary } from "../../../../components/UI/Text/Text";
import MediumLink from "../../../../components/UI/Links/Medium/MediumLink";
import Projects from "../Sections/Projects/Projects";
import SearchInput from "../../../../components/UI/Inputs/SearchInput/SearchInput";
import Spinner from "../../../../components/UI/Spinner/Spinner";
import Teams from "../Sections/Teams/Teams";
import useIntersectionObserver from "../../../../hooks/useInteractionObserver";
import usePosts from "../../../../hooks/usePosts";
import { useRouteMatch } from "react-router-dom";

const Sections = (props) => {
  const [search, setSearch] = useState("");
  const match = useRouteMatch("/home/:section");

  const {
    status,
    data,
    error,
    isFetching,
    isFetchingMore,
    fetchMore,
    canFetchMore
  } = usePosts(match.params.section);

  const loadingMore = useRef();

  useIntersectionObserver({
    target: loadingMore,
    onIntersect: fetchMore,
    enabled: canFetchMore
  });

  const filterHandler = (event) => {
    setSearch(event.target.value);
  };

  if (status === "loading") {
    return <Spinner />;
  }

  if (status === "error") {
    return <h1>There is an error</h1>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <SearchInput
        info='Filter your search'
        isSubmitButton={false}
        placeholder='Filter your search'
        value={search}
        handler={filterHandler}
      />

      <Switch>
        <Route path='/home/projects'>
          <Projects cards={data} />
        </Route>
        <Route path='/home/challenges'>
          <Challenges cards={data} />
        </Route>
        <Route path='/home/teams'>
          <Teams cards={data} />
        </Route>
        <Redirect to='/home/teams' />
      </Switch>

      {canFetchMore ? (
        <div
          ref={loadingMore}
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "2rem 0"
          }}
        >
          <Spinner />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "2rem 0"
          }}
        >
          <HeadingSecondary>
            Looks like there are no more posts
          </HeadingSecondary>
        </div>
      )}
    </div>
  );
};

export default Sections;
