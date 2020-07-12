import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Challenges from "../Sections/Challenges/Challenges";
import Projects from "../Sections/Projects/Projects";
import SearchInput from "../../../../components/UI/Inputs/SearchInput/SearchInput";
import Spinner from "../../../../components/UI/Spinner/Spinner";
import Teams from "../Sections/Teams/Teams";
import { useRouteMatch } from "react-router-dom";

const Sections = (props) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const match = useRouteMatch("/home/:section");

  const filterHandler = (event) => {
    setSearch(event.target.value);
  };

  React.useEffect(() => {
    console.log("[Sections.js] useEffect");
    const cards = {
      teams: [
        {
          id: 1,
          title: "Developers Path",
          description:
            "Developers Path is dedicated to connecting developers to opportunities by facilitating the interaction with other developers and getting hands on experience. Developers Path is run by a community of developers striving to get smarter everday.",
          tech: [
            "Reactjs",
            "Nodejs",
            "JavaScript",
            "React Query",
            "CSS",
            "Sass"
          ]
        }
      ],
      projects: [
        {
          id: 1,
          title: "Developers Path",
          description:
            "Developers Path is dedicated to connecting developers to opportunities by facilitating the interaction with other developers and getting hands on experience. Developers Path is run by a community of developers striving to get smarter everday.",
          tech: [
            "Reactjs",
            "Nodejs",
            "JavaScript",
            "React Query",
            "CSS",
            "Sass"
          ]
        },
        {
          id: 1,
          title: "Developers Path",
          description:
            "Developers Path is dedicated to connecting developers to opportunities by facilitating the interaction with other developers and getting hands on experience. Developers Path is run by a community of developers striving to get smarter everday.",
          tech: [
            "Reactjs",
            "Nodejs",
            "JavaScript",
            "React Query",
            "CSS",
            "Sass"
          ]
        }
      ],
      challenges: [
        {
          id: 1,
          title: "Developers Path",
          description:
            "Developers Path is dedicated to connecting developers to opportunities by facilitating the interaction with other developers and getting hands on experience. Developers Path is run by a community of developers striving to get smarter everday.",
          tech: [
            "Reactjs",
            "Nodejs",
            "JavaScript",
            "React Query",
            "CSS",
            "Sass"
          ]
        },
        {
          id: 1,
          title: "Developers Path",
          description:
            "Developers Path is dedicated to connecting developers to opportunities by facilitating the interaction with other developers and getting hands on experience. Developers Path is run by a community of developers striving to get smarter everday.",
          tech: [
            "Reactjs",
            "Nodejs",
            "JavaScript",
            "React Query",
            "CSS",
            "Sass"
          ]
        },
        {
          id: 1,
          title: "Developers Path",
          description:
            "Developers Path is dedicated to connecting developers to opportunities by facilitating the interaction with other developers and getting hands on experience. Developers Path is run by a community of developers striving to get smarter everday.",
          tech: [
            "Reactjs",
            "Nodejs",
            "JavaScript",
            "React Query",
            "CSS",
            "Sass"
          ]
        }
      ]
    };

    setLoading(true);

    const timer = setTimeout(() => {
      const card = cards[match.params.section];

      setCards(card);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [match.params.section]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <React.Fragment>
      <div>
        <SearchInput
          info="Filter your search based on difficulty or tech you are interested in"
          isSubmitButton={false}
          placeholder="Filter your search"
          value={search}
          handler={filterHandler}
        />
      </div>
      <Switch>
        <Route path="/home/teams">
          <Teams cards={cards} />
        </Route>
        <Route path="/home/projects">
          <Projects cards={cards} />
        </Route>
        <Route path="/home/challenges">
          <Challenges cards={cards} />
        </Route>
        <Redirect to="/home/teams" />
      </Switch>
    </React.Fragment>
  );
};

export default Sections;
