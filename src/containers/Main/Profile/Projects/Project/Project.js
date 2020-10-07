import React, { useContext } from "react";

import { headingTertiary as HeadingTertiary } from "../../../../../components/UI/Text/Text";
import MiniCard from "../../../../../components/UI/MiniCard/MiniCard";
import styles from "./Project.module.scss";

const Project = ({
  data,
  title,
  section,
  goToPostHandler,
  showDeleteModalHandler,
  isUserProfile
}) => {
  const list = data.map((d, index) => {
    return (
      <MiniCard
        key={index}
        data={d}
        section={section}
        goToPostHandler={goToPostHandler}
        isUserProfile={isUserProfile}
        deletePostHandler={showDeleteModalHandler}
      />
    );
  });

  return (
    <div className={styles.project}>
      <HeadingTertiary>{title}</HeadingTertiary>
      <div className={styles.projectSection}>{list}</div>
    </div>
  );
};

export default Project;
