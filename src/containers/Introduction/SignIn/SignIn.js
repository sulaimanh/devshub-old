import React, { useState } from "react";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  signIn,
  signInWithGitHub,
  signInWithGoogle,
  signUp
} from "../../../helper/Auth";

import Button from "../../../components/UI/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { headingSecondary as HeadingSecondary } from "../../../components/UI/Text/Text";
import { paragraph as Paragraph } from "../../../components/UI/Text/Text";
import TextInput from "../../../components/UI/Inputs/TextInput/TextInput";
import styles from "./SignIn.module.scss";
import useCreateUser from "../../../hooks/useCreateUser";
import { useHistory } from "react-router-dom";

const SignIn = (props) => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState({ errorMessage: "", isError: false });
  const [saveUser, { status, data, err }] = useCreateUser();
  const history = useHistory();

  const handleForm = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    setError({ errorMessage: "", isError: false });
    setForm((prevState) => {
      return { ...prevState, [id]: value };
    });
  };

  const signInWithGoogleHandler = async (event) => {
    event.preventDefault();
    try {
      history.push("/home/teams");
      await signInWithGoogle(saveUser);
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithGitHubHandler = async (event) => {
    event.preventDefault();
    try {
      history.push("/home/teams");
      await signInWithGitHub(saveUser);
    } catch (error) {
      console.log(error);
    }
  };

  const loginHandler = async (event) => {
    event.preventDefault();
    if (props.isSignUp) {
      if (form.password === form.confirmPassword) {
        const credentials = {
          email: form.email,
          password: form.password,
          fullName: form.fullName
        };
        history.push("/home/teams");
        await signUp(credentials, setError, saveUser);
      }
    } else {
      const credentials = {
        email: form.email,
        password: form.password
      };
      history.push("/home/teams");
      await signIn(credentials, setError);
    }
  };
  return (
    <form
      className={[
        styles.sign,
        props.isModal ? styles.sign__isModal : null
      ].join(" ")}
      onSubmit={loginHandler}
    >
      <div className={styles.sign__heading}>
        <HeadingSecondary>
          {props.isSignUp ? "Sign Up" : "Sign In"}
        </HeadingSecondary>
      </div>
      <div className={styles.sign__text}>
        {props.isSignUp ? (
          <TextInput
            placeholder='Full Name'
            for='fullName'
            type='text'
            value={form.fullName}
            handler={handleForm}
            isRequired={true}
          />
        ) : null}
        <TextInput
          placeholder='Email'
          for='email'
          type='email'
          value={form.email}
          handler={handleForm}
          isRequired={true}
        />
        <TextInput
          placeholder='Password'
          for='password'
          type='password'
          value={form.password}
          handler={handleForm}
          isRequired={true}
        />
        {props.isSignUp ? (
          <TextInput
            placeholder='Confirm Password'
            for='confirmPassword'
            type='password'
            value={form.confirmPassword}
            handler={handleForm}
            isRequired={true}
          />
        ) : null}
        {error.isError ? (
          <Paragraph className='error'>{error.errorMessage}</Paragraph>
        ) : null}
      </div>
      <div className={styles.sign__submit}>
        <Button type='submit' size='large' category='tertiary' label='Submit' />

        <div className={styles.sign__logIn}>
          <Button
            handler={signInWithGitHubHandler}
            category='github'
            label='GitHub'
            icon={<FontAwesomeIcon icon={faGithub} />}
          />
          <Button
            handler={signInWithGoogleHandler}
            category='google'
            icon={<FontAwesomeIcon icon={faGoogle} />}
            label='Google'
          />
        </div>
      </div>
    </form>
  );
};

export default SignIn;
