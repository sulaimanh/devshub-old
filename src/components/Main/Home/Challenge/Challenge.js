import React, { useEffect } from "react";

// import styles from "./Project.module.scss";
import UserPost from "../UserPost/UserPost";

const Challenge = (props) => {
  // - Retrieve the data for the Challenge
  useEffect(() => {});

  const challenge = {
    id: 1,
    owner: "Sulaiman Hamouda",
    numberOfDevelopers: 3,
    title: "Developers Path",
    description:
      "Developers Path is dedicated to connecting developers to opportunities by facilitating the interaction with other developers and getting hands on experience. Developers Path is run by a community of developers striving to get smarter everday.",
    isConfidential: true,
    requirements:
      "Developers Path is looking for 2 motivated developers who are looking to change the current way we hire engineers in the work force. You must know React or Node in order to be considered.",
    tech: ["Reactjs", "Nodejs", "JavaScript", "React Query", "CSS", "Sass"],
    githubLink: "https://github.com/developerspath/developerspath-frontend",
    numberOfDevelopersNeeded: 2
  };

  return <UserPost post={challenge} />;
};

export default Challenge;
