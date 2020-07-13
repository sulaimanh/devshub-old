import {
  headingSecondary as HeadingSecondary,
  headingTertiary as HeadingTertiary
} from "../../../../components/UI/Text/Text";
import React, { useState } from "react";

import Checkbox from "../../../../components/UI/Inputs/Checkbox/Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../../../../components/UI/Inputs/TextInput/TextInput";
import MediumButton from "../../../../components/UI/Buttons/Medium/Medium";
import MediumLink from "../../../../components/UI/Links/Medium/MediumLink";
import MoreInfo from "../../../../components/UI/MoreInfo/MoreInfo";
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
    repo: "",
    challenge: ""
  });
  const [tech, setTech] = useState([]);
  const [isCheckbox, setIsCheckbox] = useState(false);

  const setInputHandler = (event) => {
    const value = event.target.value;
    const id = event.target.id;

    setInput((prevState) => {
      return { ...prevState, [id]: value };
    });
  };

  const setTechHandler = (event) => {
    if (input.tech.trim().length > 0) {
      setTech((prevState) => [...prevState, input.tech]);
      setInput((prevState) => {
        return { ...prevState, tech: "" };
      });
    }
  };

  const setTechEnterHandler = (event) => {
    if (input.tech.trim().length > 0 && event.charCode == 13) {
      setTech((prevState) => [...prevState, input.tech]);
      setInput((prevState) => {
        return { ...prevState, tech: "" };
      });
    }
  };

  const checkboxHandler = (isClicked) => {
    setIsCheckbox(isClicked);
  };

  const deleteTechHandler = (removedTech) => {
    setTech((prevState) => {
      const updatedTechArray = prevState.filter((t) => {
        if (t !== removedTech) {
          return t;
        }
      });

      return updatedTechArray;
    });
  };

  const technology = tech.map((t, index) => {
    return (
      <div
        key={index}
        className={styles.add__techCard}
        onClick={() => deleteTechHandler(t)}
      >
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
            placeholder="Link to repository (if available)"
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

        <div className={styles.add__challenge}>
          <HeadingTertiary>Challenge</HeadingTertiary>
          <div className={styles.add__challengeCheck}>
            <Checkbox handler={checkboxHandler}>
              Is a challenge required?
            </Checkbox>

            <div className={styles.add__challengeMoreinfo}>
              <MoreInfo className="middle">
                You can require applicants to take a challenge before being able
                to apply. Please go to the Challenges section to create your
                challenge and paste your link here.
              </MoreInfo>
            </div>
          </div>

          {isCheckbox ? (
            <div>
              <HeadingTertiary>Link to Challenge</HeadingTertiary>
              <Input
                for="challenge"
                placeholder="Link to challenge"
                isTextArea={false}
                readOnly={false}
                type="text"
                value={input.challenge}
                handler={setInputHandler}
                isRequired={true}
              />
            </div>
          ) : null}
        </div>

        <div className={styles.add__submit}>
          <MediumButton className="tertiary">Post</MediumButton>
        </div>
      </div>
    </form>
  );
};

export default Add;
