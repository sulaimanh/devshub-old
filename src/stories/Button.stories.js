import "../sass/base/_base.scss";

import Button from "../components/UI/Button/Button";
import React from "react";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    category: {
      description: "A string describing type of button",
      table: {
        type: {
          summary: "String"
        }
      },
      control: {
        type: "inline-radio",
        options: ["primary", "secondary", "tertiary", "tertiary--outline"]
      }
    },
    label: {
      description: "Label of button",
      table: {
        type: {
          summary: "String"
        }
      }
    },
    type: {
      description: "Type of button",
      table: {
        type: {
          summary: "String"
        }
      }
    },
    size: {
      description: "Size of button",
      table: {
        type: {
          summary: "String"
        }
      },
      defaultValue: "small",
      control: {
        type: "inline-radio",
        options: ["small", "medium", "large"]
      }
    },
    handler: {
      description: "Buttons handler function",
      table: {
        type: {
          summary: "() => {}"
        }
      },
      control: {
        type: null
      }
    },
    icon: {
      description: "Icon with button",
      table: {
        type: {
          summary: "Icon Component"
        }
      },
      control: {
        type: null
      }
    }
  }
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  category: "primary",
  label: "Primary Button",
  type: "button",
  size: "large"
};

export const Secondary = Template.bind({});
Secondary.args = {
  category: "secondary",
  label: "Secondary Button",
  type: "button",
  size: "large"
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  category: "tertiary",
  label: "Tertiary Button",
  type: "button",
  size: "large"
};

export const TertiaryOutline = Template.bind({});
TertiaryOutline.args = {
  category: "tertiary--outline",
  label: "Tertiary Outline Button",
  type: "button",
  size: "large"
};
