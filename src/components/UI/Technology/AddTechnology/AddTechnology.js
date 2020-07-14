import { headingTertiary as HeadingTertiary } from "../../Text/Text";
import Input from "../../../UI/Inputs/TextInput/TextInput";
import MediumLink from "../../../UI/Links/Medium/MediumLink";
import React from "react";
import styles from "./AddTechnology.module.scss";

const AddTechnology = ({
  techValue,
  techArr,
  setInput,
  setTechArr,
  setInputHandler
}) => {
  const setTechHandler = (event) => {
    if (techValue.trim().length > 0) {
      setTechArr((prevState) => [...prevState, techValue]);
      setInput((prevState) => {
        return { ...prevState, tech: "" };
      });
    }
  };

  const setTechEnterHandler = (event) => {
    if (event.charCode == 13 && techValue.trim().length > 0) {
      setTechArr((prevState) => [...prevState, techValue]);
      setInput((prevState) => {
        return { ...prevState, tech: "" };
      });
    }
  };

  const deleteTechHandler = (removedTech) => {
    setTechArr((prevState) => {
      const updatedTechArray = prevState.filter((t) => {
        if (t !== removedTech) {
          return t;
        }
      });

      return updatedTechArray;
    });
  };

  const technology = techArr.map((t, index) => {
    return (
      <div
        key={index}
        className={styles.techCard}
        onClick={() => deleteTechHandler(t)}
      >
        <p className={styles.techText}>{t}</p>
      </div>
    );
  });
  return (
    <div className={styles.tech}>
      <HeadingTertiary>Technology</HeadingTertiary>
      <div className={styles.techContainer} onKeyPress={setTechEnterHandler}>
        <Input
          for="tech"
          placeholder="Technology needed to know"
          isTextArea={false}
          readOnly={false}
          type="text"
          value={techValue}
          handler={setInputHandler}
          isRequired={false}
        />
        <div className={styles.techAdd}>
          <MediumLink handler={setTechHandler} className="primary1">
            Add
          </MediumLink>
        </div>
      </div>
      <div className={styles.techCards}>
        {techArr.length > 0 ? <p>Click to delete</p> : null}
        <div className={styles.techTechnology}>{technology}</div>
      </div>
    </div>
  );
};

export default AddTechnology;
