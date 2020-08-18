import "../sass/base/_base.scss";

import React from "react";
import TextInput from "../components/UI/Inputs/TextInput/TextInput";

export default {
  title: "Input",
  component: TextInput,
  argTypes: {
    id: {
      description: "Id which allows two way binding",
      table: {
        type: {
          summary: "String"
        }
      }
    },
    type: {
      description: "Type of Input element",
      table: {
        type: {
          summary: "String"
        }
      }
    },
    value: {
      description: "Value of Input when typed",
      table: {
        type: {
          summary: "String"
        }
      }
    },
    placeholder: {
      description: "Placeholder of input element",
      table: {
        type: {
          summary: "String"
        }
      }
    },
    isTextArea: {
      description: "Boolean value making input a Text Area or not",
      table: {
        type: {
          summary: "Boolean"
        }
      },
      defaultValue: false,
      control: {
        type: "boolean"
      }
    },
    handler: {
      description: "Two-way binding function",
      table: {
        type: {
          summary: "() => {}"
        }
      }
    },
    backgroundColor: {
      description: "Color of input",
      table: {
        type: {
          summary: "String"
        }
      },
      control: {
        type: "inline-radio",
        options: ["white", "dark"]
      }
    },
    isRequired: {
      description: "Element is required to have a value",
      table: {
        type: {
          summary: "Boolean"
        }
      }
    }
  }
};

const Template = (args) => <TextInput {...args} />;

export const Text = Template.bind({});
Text.args = {
  id: "Input",
  type: "text",
  value: "",
  placeholder: "Enter Text",
  handler: () => {},
  backgroundColor: "white",
  isRequired: true,
  isTextArea: true
};
