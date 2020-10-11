import React, { useRef } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import { headingSecondary as HeadingSecondary } from "../../../../components/UI/Text/Text";
import Section from "../../../../components/Main/Home/Section/Section";
import Spinner from "../../../../components/UI/Spinner/Spinner";
import useIntersectionObserver from "../../../../hooks/useInteractionObserver";
import usePosts from "../../../../hooks/usePosts";

const Sections = (props) => {
  const match = useRouteMatch("/home/:section");
  const history = useHistory();

  const { status, data, fetchMore, canFetchMore, isFetchingMore } = usePosts(
    match.params.section
  );

  const loadingMore = useRef();

  useIntersectionObserver({
    target: loadingMore,
    onIntersect: fetchMore,
    enabled: canFetchMore
  });

  const sectionSelectedHandler = (event, projectId) => {
    history.push(`/home/${match.params.section}/${projectId}`);
  };

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
      <Section sectionSelectedHandler={sectionSelectedHandler} cards={data} />

      {status === "loading" && canFetchMore && isFetchingMore ? (
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
      ) : null}

      {canFetchMore && isFetchingMore ? (
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
            textAlign: "center",
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
