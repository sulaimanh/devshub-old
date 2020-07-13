import React, { useState } from "react";

import { headingSecondary as HeadingSecondary } from "../../../components/UI/Text/Text";
import MediumButton from "../../../components/UI/Buttons/Medium/Medium";
import TextInput from "../../../components/UI/Inputs/TextInput/TextInput";
import styles from "./SignIn.module.scss";

const SignIn = (props) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleForm = (event) => {
    console.log(form);

    setForm({ ...form, [event.target.id]: event.target.value });
  };

  return (
    <form
      className={[
        styles.sign,
        props.isModal ? styles.sign__isModal : null
      ].join(" ")}
    >
      <div className={styles.sign__heading}>
        <HeadingSecondary>
          {props.isSignUp ? "Sign Up" : "Sign In"}
        </HeadingSecondary>
      </div>
      <div className={styles.sign__text}>
        <TextInput
          placeholder="Email"
          for="email"
          type="email"
          value={form.email}
          handler={handleForm}
          isRequired={true}
        />
        <TextInput
          placeholder="Password"
          for="password"
          type="password"
          value={form.password}
          handler={handleForm}
          isRequired={true}
        />
        {props.isSignUp ? (
          <TextInput
            placeholder="Confirm Password"
            for="confirmPassword"
            type="password"
            value={form.confirmPassword}
            handler={handleForm}
            isRequired={true}
          />
        ) : null}
      </div>
      <div className={styles.sign__submit}>
        <MediumButton className="tertiary">Submit</MediumButton>
      </div>
    </form>
  );
};

export default SignIn;
