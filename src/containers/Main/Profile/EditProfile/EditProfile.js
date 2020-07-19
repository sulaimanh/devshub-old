import React, { useState } from "react";

import { headingSecondary as HeadingSecondary } from "../../../../components/UI/Text/Text";
import Input from "../../../../components/UI/Inputs/TextInput/TextInput";
import MediumLink from "../../../../components/UI/Links/Medium/MediumLink";
import styles from "./EditProfile.module.scss";

const EditProfile = (props) => {
  const [input, setInput] = useState({ email: "", socialMedia: "" });

  return (
    <div className={styles.edit}>
      <HeadingSecondary>Update your Information</HeadingSecondary>
      <Input placeholder='Email' isRequired={false} for='email' type='email' />
      <Input
        placeholder='Social Media Link'
        isRequired={false}
        for='socialMedia'
        type='text'
      />
      <MediumLink className='tertiary'>Submit</MediumLink>
    </div>
  );
};

export default EditProfile;
