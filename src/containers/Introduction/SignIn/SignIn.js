import React, { useState } from "react";
import { signIn, signUp } from "../../../context/Auth";

import { headingSecondary as HeadingSecondary } from "../../../components/UI/Text/Text";
import MediumButton from "../../../components/UI/Buttons/Medium/Medium";
import { paragraph as Paragraph } from "../../../components/UI/Text/Text";
import TextInput from "../../../components/UI/Inputs/TextInput/TextInput";
import styles from "./SignIn.module.scss";
import useCreateUser from "../../../hooks/useCreateUser";

const SignIn = (props) => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState({ errorMessage: "", isError: false });
  const [saveUser, { status, data, err }] = useCreateUser();

  const handleForm = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    setError({ errorMessage: "", isError: false });
    setForm((prevState) => {
      return { ...prevState, [id]: value };
    });
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
        signUp(credentials, setError, saveUser);
      }
    } else {
      const credentials = {
        email: form.email,
        password: form.password
      };
      signIn(credentials, setError);
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
        <MediumButton className='tertiary'>Submit</MediumButton>
      </div>
    </form>
  );
};

export default SignIn;
