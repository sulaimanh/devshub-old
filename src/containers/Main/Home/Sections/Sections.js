import React, { useEffect, useRef } from "react";

import { headingSecondary as HeadingSecondary } from "../../../../components/UI/Text/Text";
import { Route } from "react-router-dom";
import Section from "./Section/Section";
import Spinner from "../../../../components/UI/Spinner/Spinner";
import useIntersectionObserver from "../../../../hooks/useInteractionObserver";
import usePosts from "../../../../hooks/usePosts";
import { useRouteMatch } from "react-router-dom";

const Sections = (props) => {
  const match = useRouteMatch("/home/:section");

  const { status, data, fetchMore, canFetchMore, isFetchingMore } = usePosts(
    match.params.section
  );

  useEffect(() => {
    console.log("[Sections.js] useEffect");
  });

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

  // console.log(data[0].docs.length);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <Section cards={data} />

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
