import React, { useState } from "react";
import styles from "./Add.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import Input from "../../../../components/UI/Inputs/TextInput/TextInput";
import { headingSecondary as HeadingSecondary } from "../../../../components/UI/Text/Text";
import MediumLink from "../../../../components/UI/Links/Medium/MediumLink";

const Add = (props) => {
  // Title, Description, Number of Developers, Number of Develoeprs Needed,
  //     Technology Used, Technology Needed, github Repo
  return (
    <div
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh"
      }}
      className={styles.add}
    >
      <div className={styles.add__top}>
        <FontAwesomeIcon
          className={styles.add__top__back}
          size="2x"
          onClick={props.handler}
          icon={faArrowCircleLeft}
        />
        <HeadingSecondary>Add a {props.section}</HeadingSecondary>
      </div>
      <Input
        for="description"
        placeholder="Enter Description"
        isTextArea={true}
        readOnly={false}
      />
      <div className={styles.add__dev}>
        <Input
          for="currentDev"
          placeholder="Current number of developers"
          isTextArea={false}
          readOnly={false}
        />

        <Input
          for="neededDev"
          placeholder="Number of developers needed"
          isTextArea={false}
          readOnly={false}
        />
      </div>

      <Input
        for="used"
        placeholder="Technology Used"
        isTextArea={false}
        readOnly={false}
      />
      <Input
        for="know"
        placeholder="Developers who know"
        isTextArea={false}
        readOnly={false}
      />
      <Input
        for="repo"
        placeholder="Link to repository (if applicable)"
        isTextArea={false}
        readOnly={false}
        isRequired={false}
      />

      <div className={styles.add__submit}>
        <MediumLink className="tertiary">Add</MediumLink>
      </div>
    </div>
  );
};

export default Add;
