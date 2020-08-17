import React, { useEffect, useRef, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { headingSecondary as HeadingSecondary } from "../../../../components/UI/Text/Text";
import SearchInput from "../../../../components/UI/Inputs/SearchInput/SearchInput";
import Section from "./Section/Section";
import Spinner from "../../../../components/UI/Spinner/Spinner";
import useIntersectionObserver from "../../../../hooks/useInteractionObserver";
import usePosts from "../../../../hooks/usePosts";
import { useRouteMatch } from "react-router-dom";

const Sections = (props) => {
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
      <Switch>
        <Route path={`/home/${match.params.section}`}>
          <Section cards={data} />
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
            Looks like we have reached the bottom
          </HeadingSecondary>
        </div>
      )}
    </div>
  );
};

export default Sections;
