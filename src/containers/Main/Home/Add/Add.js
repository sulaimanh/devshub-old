import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { headingSecondary as HeadingSecondary } from "../../../../components/UI/Text/Text";
import Input from "../../../../components/UI/Inputs/TextInput/TextInput";
import MediumLink from "../../../../components/UI/Links/Medium/MediumLink";
import React from "react";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./Add.module.scss";

const Add = (props) => {
  // Title, Description, Number of Developers, Number of Develoeprs Needed,
  //     Technology Used, Technology Needed, github Repo
  return (
    <div className={styles.container}>
      <div className={styles.add}>
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
          for="title"
          placeholder="Enter Title"
          isTextArea={false}
          readOnly={false}
        />
        <Input
          for="description"
          placeholder={`Enter ${props.section} Description`}
          isTextArea={true}
          readOnly={false}
        />
        <Input
          for="numOfDevelopers"
          placeholder="# of developers"
          isTextArea={false}
          readOnly={false}
        />
        <Input
          for="numOfDevelopersNeeded"
          placeholder="# of developers you need"
          isTextArea={false}
          readOnly={false}
        />
        <div className={styles.add__tech}>
          <div className={styles.add__techInput}>
            <Input
              for="repo"
              placeholder="Technology needed to know"
              isTextArea={false}
              readOnly={false}
            />
          </div>
          <div className={styles.add__techAdd}>
            <MediumLink className="primary1">Add</MediumLink>
          </div>
        </div>
        <Input
          for="repo"
          placeholder="Link to repository"
          isTextArea={false}
          readOnly={false}
        />

        <div className={styles.add__submit}>
          <MediumLink className="tertiary">Add</MediumLink>
        </div>
      </div>
    </div>
  );
};

export default Add;
