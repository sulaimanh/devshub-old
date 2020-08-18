import {
  headingSecondary as HeadingSecondary,
  headingTertiary as HeadingTertiary
} from "../../../../components/UI/Text/Text";
import React, { useContext, useState } from "react";

import AddTechnology from "../../../../components/UI/Technology/AddTechnology/AddTechnology";
import { AuthContext } from "../../../../helper/Auth";
import Button from "../../../../components/UI/Button/Button";
import Checkbox from "../../../../components/UI/Inputs/Checkbox/Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MoreInfo from "../../../../components/UI/MoreInfo/MoreInfo";
import TextInput from "../../../../components/UI/Inputs/TextInput/TextInput";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./Add.module.scss";
import useCreateEditPost from "../../../../hooks/useCreateEditPost";
import { useRouteMatch } from "react-router-dom";

const Add = (props) => {
  const [input, setInput] = useState({
    title: props.post ? props.post.title : "",
    description: props.post ? props.post.description : "",
    requirements: props.post ? props.post.requirements : "",
    numOfDevelopers: props.post ? props.post.numOfDevelopers : "",
    numOfDevelopersNeeded: props.post ? props.post.numOfDevelopersNeeded : "",
    tech: "",
    repo: props.post ? props.post.repo : "",
    challenge: props.post ? props.post.challenge : ""
  });
  const [techArr, setTechArr] = useState(props.post ? props.post.techArr : []);
  const { currentUser } = useContext(AuthContext);
  const [isCheckbox, setIsCheckbox] = useState({
    repo: props.post ? (props.post.repo != 0 ? true : false) : false,
    challenge: props.post ? (props.post.challenge != 0 ? true : false) : false
  });
  const match = useRouteMatch("/home/:section");
  const [savePost, { status, data, error }] = useCreateEditPost(
    match.params.section,
    props.post ? props.postId : null
  );

  const setInputHandler = (event) => {
    const value = event.target.value;
    const id = event.target.id;

    setInput((prevState) => {
      return { ...prevState, [id]: value };
    });
  };

  const checkboxHandler = (isClicked, id) => {
    setIsCheckbox((prevState) => {
      return { ...prevState, [id]: isClicked };
    });
  };

  const postProjectHandler = () => {
    delete input.tech;
    savePost({
      ownerId: currentUser.ownerId,
      name: currentUser.name,
      techArr: techArr,
      createdAt: props.post ? props.post.createdAt : null,
      users: props.post ? props.post.users : null,
      ...input
    });
    props.handler();
  };

  return (
    <form onSubmit={postProjectHandler} className={styles.form}>
      <div className={styles.container}>
        <div className={styles.add}>
          <div className={styles[`add--top`]}>
            <FontAwesomeIcon
              className={styles[`add--top__back`]}
              size='2x'
              onClick={props.handler}
              icon={faArrowCircleLeft}
            />
            <HeadingSecondary>Post a {props.section}</HeadingSecondary>
          </div>
          <div className={styles[`add--withHeading`]}>
            <HeadingTertiary>Title</HeadingTertiary>
            <TextInput
              id='title'
              placeholder={`Enter ${props.section} Name`}
              value={input.title}
              type='text'
              handler={setInputHandler}
              isRequired={true}
              backgroundColor='white'
            />
          </div>
          <div className={styles[`add--row2`]}>
            <div className={styles[`add--withHeading`]}>
              <HeadingTertiary>Description</HeadingTertiary>
              <TextInput
                id='description'
                placeholder={`Enter ${props.section} description`}
                type='text'
                value={input.description}
                handler={setInputHandler}
                isRequired={true}
                backgroundColor='white'
                isTextArea={true}
              />
            </div>
            {props.section === "Challenge" ? null : (
              <div className={styles[`add--withHeading`]}>
                <HeadingTertiary>Requirements</HeadingTertiary>
                <TextInput
                  id='requirements'
                  placeholder={`Enter ${props.section} requirements`}
                  type='text'
                  value={input.requirements}
                  handler={setInputHandler}
                  isRequired={true}
                  backgroundColor='white'
                  isTextArea
                />
              </div>
            )}
          </div>
          {props.section === "Challenge" ? null : (
            <div className={styles[`add--row2`]}>
              <div className={styles[`add--withHeading`]}>
                <HeadingTertiary>Number of Developers</HeadingTertiary>
                <TextInput
                  id='numOfDevelopers'
                  placeholder='# of developers'
                  type='text'
                  value={input.numOfDevelopers}
                  handler={setInputHandler}
                  isRequired={true}
                  backgroundColor='white'
                />
              </div>
              <div className={styles[`add--withHeading`]}>
                <HeadingTertiary>Number of Developers Needed</HeadingTertiary>
                <TextInput
                  id='numOfDevelopersNeeded'
                  placeholder='# of developers you need'
                  type='text'
                  value={input.numOfDevelopersNeeded}
                  handler={setInputHandler}
                  isRequired={true}
                  backgroundColor='white'
                />
              </div>
            </div>
          )}

          {props.section === "Challenge" ? (
            <div className={styles[`add--withHeading`]}>
              <div className={styles[`add--challenge__check`]}>
                <HeadingTertiary>Link to Challenge</HeadingTertiary>
                <div className={styles[`add--challenge__moreinfo`]}>
                  <MoreInfo className='middle'>
                    Enter the link for the challenge.
                  </MoreInfo>
                </div>
              </div>
              <TextInput
                id='challenge'
                placeholder={`Enter link to challenge`}
                type='text'
                value={input.requirements}
                handler={setInputHandler}
                isRequired={true}
                backgroundColor='white'
              />
            </div>
          ) : (
            <div className={styles[`add--withHeading`]}>
              <AddTechnology
                techValue={input.tech}
                setInputHandler={setInputHandler}
                setTechArr={setTechArr}
                setInput={setInput}
                techArr={techArr}
                backgroundInputColor='white'
              />
            </div>
          )}

          {props.section === "Challenge" ? null : (
            <div className={styles[`add--withHeading`]}>
              <HeadingTertiary>Repository</HeadingTertiary>
              <div className={styles[`add--challenge__check`]}>
                <Checkbox id='repo' handler={checkboxHandler}>
                  Would you like to add a repository?
                </Checkbox>
              </div>
              {isCheckbox.repo ? (
                <div>
                  <HeadingTertiary>Link to Repository</HeadingTertiary>
                  <TextInput
                    id='repo'
                    placeholder='Link to repository'
                    type='text'
                    value={input.repo}
                    handler={setInputHandler}
                    isRequired={true}
                    backgroundColor='white'
                  />
                </div>
              ) : null}
            </div>
          )}

          {props.section === "Challenge" ? null : (
            <div className={styles[`add--challenge`]}>
              <HeadingTertiary>Challenge</HeadingTertiary>
              <div className={styles[`add--challenge__check`]}>
                <Checkbox id='challenge' handler={checkboxHandler}>
                  Is a challenge required?
                </Checkbox>

                <div className={styles[`add--challenge__moreinfo`]}>
                  <MoreInfo className='middle'>
                    You can require applicants to take a challenge before being
                    able to apply. Please go to the Challenges section to create
                    your challenge and paste your link here.
                  </MoreInfo>
                </div>
              </div>

              {isCheckbox.challenge ? (
                <div>
                  <HeadingTertiary>Link to Challenge</HeadingTertiary>
                  <TextInput
                    id='challenge'
                    placeholder='Link to challenge'
                    type='text'
                    value={input.challenge}
                    handler={setInputHandler}
                    isRequired={true}
                    backgroundColor='white'
                  />
                </div>
              ) : null}
            </div>
          )}

          <div className={styles[`add--submit`]}>
            <Button
              handler={postProjectHandler}
              category='tertiary'
              label='Post'
              type='button'
              size='large'
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Add;
