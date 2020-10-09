import React, { useState } from "react";

import Button from "../../../../components/UI/Button/Button";
import { headingSecondary as HeadingSecondary } from "../../../../components/UI/Text/Text";
import Input from "../../../../components/UI/Inputs/TextInput/TextInput";
import MoreInfo from "../../../../components/UI/MoreInfo/MoreInfo";
import styles from "./EditProfile.module.scss";

// import { useForm } from "react-hook-form";

const EditProfile = (props) => {
  const [input, setInput] = useState({
    picture: props.user.picture ? props.user.picture : "",
    portfolio: props.user.portfolio ? props.user.portfolio : "",
    github: props.user.github ? props.user.github : "",
    twitter: props.user.twitter ? props.user.twitter : "",
    facebook: props.user.facebook ? props.user.facebook : "",
    linkedin: props.user.linkedin ? props.user.linkedin : ""
  });

  // const { register, handleSubmit, watch, errors } = useForm();

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
      <div className={styles[`edit--container`]}>
        <HeadingSecondary>Update your Information</HeadingSecondary>
        <div className={styles[`edit--container__moreinfo`]}>
          <MoreInfo className='left'>
            If you would like to delete a field, just leave that field blank and
            submit
          </MoreInfo>
        </div>
      </div>
      <div className={styles[`edit--container`]}>
        <div className={styles[`edit--input`]}>
          <Input
            handler={userChangeInput}
            value={input.picture}
            placeholder='Link to your profile picture'
            isRequired={false}
            id='picture'
            type='url'
          />
        </div>
        <div className={styles[`edit--container__moreinfo`]}>
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
        id='github'
        type='url'
      />
      <Input
        handler={userChangeInput}
        value={input.portfolio}
        placeholder='Portfolio'
        isRequired={false}
        id='portfolio'
        type='url'
      />
      <Input
        handler={userChangeInput}
        value={input.twitter}
        placeholder='Twitter'
        isRequired={false}
        id='twitter'
        type='url'
      />
      <Input
        handler={userChangeInput}
        value={input.facebook}
        placeholder='Facebook'
        isRequired={false}
        id='facebook'
        type='url'
      />
      <Input
        handler={userChangeInput}
        value={input.linkedin}
        placeholder='LinkedIn'
        isRequired={false}
        id='linkedin'
        type='url'
      />
      <div className={styles[`edit--submit`]}>
        <Button type='submit' label='Submit' size='large' category='tertiary' />
      </div>
    </form>
  );
};

export default EditProfile;
