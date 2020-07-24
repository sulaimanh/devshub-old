import React, { useState } from "react";

import { headingSecondary as HeadingSecondary } from "../../../../components/UI/Text/Text";
import Input from "../../../../components/UI/Inputs/TextInput/TextInput";
import MediumButton from "../../../../components/UI/Buttons/Medium/Medium";
import MoreInfo from "../../../../components/UI/MoreInfo/MoreInfo";
import styles from "./EditProfile.module.scss";

const EditProfile = (props) => {
  const [input, setInput] = useState({
    picture: props.user.picture ? props.user.picture : "",
    portfolio: props.user.portfolio ? props.user.portfolio : "",
    github: props.user.github ? props.user.github : ""
  });

  const userChangeInput = (event) => {
    const value = event.target.value;
    const id = event.target.id;
    setInput((prevValue) => {
      return { ...prevValue, [id]: value };
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    await props.updateUserHandler(input);
  };

  return (
    <form onSubmit={submitForm} className={styles.edit}>
      <div className={styles.edit__pic}>
        <HeadingSecondary>Update your Information</HeadingSecondary>
        <div className={styles.edit__pic__moreInfo}>
          <MoreInfo className='left'>
            If you would like to delete a field, just leave that field blank and
            submit
          </MoreInfo>
        </div>
      </div>
      <div className={styles.edit__pic}>
        <Input
          handler={userChangeInput}
          value={input.picture}
          placeholder='Link to your profile picture'
          isRequired={false}
          for='picture'
          type='url'
          isUrl={true}
        />
        <div className={styles.edit__pic__moreInfo}>
          <MoreInfo className='left'>
            You can copy a link to your profile picture from websites such as
            LinkedIn, GitHub, Facebook, etc..
          </MoreInfo>
        </div>
      </div>
      <Input
        handler={userChangeInput}
        value={input.github}
        placeholder='GitHub Account'
        isRequired={false}
        for='github'
        type='url'
        isUrl={true}
      />
      <Input
        handler={userChangeInput}
        value={input.portfolio}
        placeholder='Portfolio'
        isRequired={false}
        for='portfolio'
        type='url'
        isUrl={true}
      />
      <div className={styles.edit__submit}>
        <MediumButton className='tertiary'>Submit</MediumButton>
      </div>
    </form>
  );
};

export default EditProfile;
