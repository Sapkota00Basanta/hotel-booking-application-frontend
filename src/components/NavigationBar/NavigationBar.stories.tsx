/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
// Import Third-party components
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

// Import User-Defined Components
import { NavigationBar } from './NavigationBar'

// Defining Storybook ComponentMeta from NavigationBar Component
export default {
  title: 'Components//NavigationBar',
  componenet: NavigationBar,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof NavigationBar>

// Defining Story base Template for NavigationBar Component
const baseTemplate: ComponentStory<typeof NavigationBar> = (args) => (
  <NavigationBar {...args} />
)

// Acutal stories for NavigationBar Component by copying base function
export const onLogin = baseTemplate.bind({})
onLogin.args = {
  user: 'Basanta!!'
}

export const onLogout = baseTemplate.bind({})
onLogout.args = {}
