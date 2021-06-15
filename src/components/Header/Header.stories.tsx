import React from "react";
import { Meta, Story } from "@storybook/react";
import Header, { HeaderProps } from "./Header";

export default {
  title: "Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args: HeaderProps) => (
  <Header {...args} />
);

export const LocaleOn = Template.bind({});
LocaleOn.args = {
  menu: [
    { name: "home", src: "#home" },
    { name: "service", src: "#service" },
    { name: "about", src: "#about" },
  ],
  locale: true,
};

export const LocaleOff = Template.bind({});
LocaleOff.args = {
  menu: [
    { name: "home", src: "#home" },
    { name: "service", src: "#service" },
    { name: "about", src: "#about" },
  ],
  locale: true,
};
