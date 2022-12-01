/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable react/react-in-jsx-scope */
// Import Third-party Components
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

// Import User-Defined Components
import { Header } from './Header'

// Defining Storybook Component Meta for Header Component
export default {
  title: 'Components/Header',
  component: Header
} as ComponentMeta<typeof Header>

// Defining Storybook base template for Header Component
export const baseTemplate: ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
)

// Actual stories for Header Component by copying base function
export const listHeader = baseTemplate.bind({})
listHeader.args = {
  displayFormat: 'list'
}

export const nonListHeader = baseTemplate.bind({})
nonListHeader.args = {
}
