import "../sass/base/_base.scss";

import Card from "../components/UI/Card/Card";
import React from "react";

export default {
  title: "Card",
  component: Card,
  argTypes: {
    description: {
      description: "Description of post",
      table: {
        type: {
          summary: "String"
        }
      }
    },
    id: {
      description: "A string which identifies the post",
      table: {
        type: {
          summary: "String"
        }
      }
    },
    title: {
      description: "Title of post",
      table: {
        type: {
          summary: "String"
        }
      }
    },
    tech: {
      description: "An array describing requirements of post",
      table: {
        type: {
          summary: "Array"
        }
      }
    },
    handler: {
      description: "A function which directs user to the full post",
      table: {
        type: {
          summary: "() => {}"
        }
      }
    }
  }
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  description:
    "Developers Path is committed to helping developers find teams, projects, and challenges to work on or join. The hardest thing for a new developer is finding projects/teams to work on in order to gain *real* experiences and apply their skills to *actual* projects. Developers Path will allow other developers to post projects and teams in order for others to join. This will not only help developers build their skills and portfolio, but it will also teach them how to work on a team and collaborate with others. Want to possibly use Next.js",
  id: "DXvs6X3eXbWI8m3EJmtm",
  title: "Developes Path",
  tech: ["React.js", "JavaScript", "Next.js", "React Query"]
};
