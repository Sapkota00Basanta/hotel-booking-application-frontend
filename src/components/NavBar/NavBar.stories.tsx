//Import components
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../../stories/Button";
import { NavBar } from "./NavBar";

//Defining Story Title and components
export default {
  title: "Components//NavigationBar",
  componenet: NavBar,
  parameters: {
    layout: "fullscreen",
  }
} as ComponentMeta<typeof Button>;

//Base function to make it interactive
const baseTemplate: ComponentStory<typeof NavBar> = (args) => (
  <NavBar {...args} />
);

//Acutal stories for navbar by coping base function
export const onLogin = baseTemplate.bind({});
onLogin.args = {
    user: "Basanta!!"
}

export const onLogout = baseTemplate.bind({});
onLogout.args= {}