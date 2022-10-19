/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
// Import components
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { NavBar } from './NavBar'

// Defining Story Title and components
export default {
  title: 'Components//NavigationBar',
  componenet: NavBar,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof NavBar>

// Base function to make it interactive
const baseTemplate: ComponentStory<typeof NavBar> = (args) => (
  <NavBar {...args} />
)

// Acutal stories for navbar by coping base function
export const onLogin = baseTemplate.bind({})
onLogin.args = {
  user: 'Basanta!!'
}

export const onLogout = baseTemplate.bind({})
onLogout.args = {}
