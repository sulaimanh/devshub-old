import {
  headingSecondary as HeadingSecondary,
  headingTertiary as HeadingTertiary
} from "../../../../components/UI/Text/Text";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../../../../components/UI/Inputs/TextInput/TextInput";
import MediumButton from "../../../../components/UI/Buttons/Medium/Medium";
import MediumLink from "../../../../components/UI/Links/Medium/MediumLink";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./Add.module.scss";

const Add = (props) => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    numOfDevelopers: "",
    numOfDevelopersNeeded: "",
    tech: "",
    repo: ""
  });
  const [tech, setTech] = useState([]);

  const setInputHandler = (event) => {
    const value = event.target.value;
    const id = event.target.id;

    setInput((prevState) => {
      return { ...prevState, [id]: value };
    });
  };

  const setTechHandler = (event) => {
    setInput((prevState) => {
      return { ...prevState, tech: "" };
    });
    setTech((prevState) => [...prevState, input.tech]);
  };

  const setTechEnterHandler = (event) => {
    if (event.charCode == 13) {
      setInput((prevState) => {
        return { ...prevState, tech: "" };
      });
      setTech((prevState) => [...prevState, input.tech]);
    }
  };

  const technology = tech.map((t, index) => {
    return (
      <div key={index} className={styles.add__techCard}>
        <p className={styles.add__techText}>{t}</p>
      </div>
    );
  });

  return (
    <form className={styles.container}>
      <div className={styles.add}>
        <div className={styles.add__top}>
          <FontAwesomeIcon
            className={styles.add__top__back}
            size="2x"
            onClick={props.handler}
            icon={faArrowCircleLeft}
          />
          <HeadingSecondary>Post a {props.section}</HeadingSecondary>
        </div>
        <HeadingTertiary>Title</HeadingTertiary>
        <Input
          for="title"
          placeholder="Enter Title"
          isTextArea={false}
          readOnly={false}
          value={input.title}
          type="text"
          handler={setInputHandler}
          isRequired={true}
        />
        <div className={styles.add__row2}>
          <div className={styles.add__withHeading}>
            <HeadingTertiary>Description</HeadingTertiary>
            <Input
              for="description"
              placeholder={`Enter ${props.section} description`}
              isTextArea={true}
              readOnly={false}
              type="text"
              value={input.description}
              handler={setInputHandler}
              isRequired={true}
            />
          </div>
          <div className={styles.add__withHeading}>
            <HeadingTertiary>Requirements</HeadingTertiary>
            <Input
              for="requirements"
              placeholder={`Enter ${props.section} requirements`}
              isTextArea={true}
              readOnly={false}
              type="text"
              value={input.requirements}
              handler={setInputHandler}
              isRequired={true}
            />
          </div>
        </div>
        <div className={styles.add__row2}>
          <div className={styles.add__withHeading}>
            <HeadingTertiary>Number of Developers</HeadingTertiary>
            <Input
              for="numOfDevelopers"
              placeholder="# of developers"
              isTextArea={false}
              readOnly={false}
              type="text"
              value={input.numOfDevelopers}
              handler={setInputHandler}
              isRequired={true}
            />
          </div>
          <div className={styles.add__withHeading}>
            <HeadingTertiary>Number of Developers Needed</HeadingTertiary>
            <Input
              for="numOfDevelopersNeeded"
              placeholder="# of developers you need"
              isTextArea={false}
              readOnly={false}
              type="text"
              value={input.numOfDevelopersNeeded}
              handler={setInputHandler}
              isRequired={true}
            />
          </div>
        </div>

        <div className={styles.add__withHeading}>
          <HeadingTertiary>Link to Repository</HeadingTertiary>
          <Input
            for="repo"
            placeholder="Link to repository"
            isTextArea={false}
            readOnly={false}
            type="text"
            value={input.repo}
            handler={setInputHandler}
            isRequired={false}
          />
        </div>

        <div className={styles.add__tech}>
          <HeadingTertiary>Technology</HeadingTertiary>
          <div
            className={styles.add__techContainer}
            onKeyPress={setTechEnterHandler}
          >
            <Input
              for="tech"
              placeholder="Technology needed to know"
              isTextArea={false}
              readOnly={false}
              type="text"
              value={input.tech}
              handler={setInputHandler}
              isRequired={false}
            />
            <div className={styles.add__techAdd}>
              <MediumLink handler={setTechHandler} className="primary1">
                Add
              </MediumLink>
            </div>
          </div>
          <div className={styles.add__techTechnology}>{technology}</div>
        </div>

        <div className={styles.add__submit}>
          <MediumButton className="tertiary">Post</MediumButton>
        </div>
      </div>
    </form>
  );
};

export default Add;
