import React from "react";
import styles from "./Team.module.scss";
import UserPost from "../UserPost/UserPost";

const Team = (props) => {
  const team = {
    id: 1,
    owner: "Sulaiman Hamouda",
    numberOfDevelopers: 3,
    title: "Developers Path",
    description:
      "Developers Path is dedicated to connecting developers to opportunities by facilitating the interaction with other developers and getting hands on experience. Developers Path is run by a community of developers striving to get smarter everday.",
    isConfidential: true,
    techUsed: [
      "Reactjs",
      "Nodejs",
      "JavaScript",
      "Reactjs",
      "Nodejs",
      "JavaScript",
      "Redux",
      "JavaScript",
      "Reactjs",
      "Nodejs",
      "JavaScript",
      "Redux"
    ],
    techNeeded: ["Reactjs", "JavaScript", "Redux"],
    githubLink: "https://github.com/developerspath/developerspath-frontend",
    numberOfDevelopersNeeded: 2
  };

  return <UserPost post={team} />;
};

export default Team;
