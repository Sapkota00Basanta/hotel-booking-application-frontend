/* eslint-disable @typescript-eslint/consistent-type-assertions */
// Import Third-party Components
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

// Import User-Defined Components
import { HeaderSearchItem } from './HeaderSearchItem'

// Defining Storybook ComponentMeta for HeaderSearchItem Component
export default {
  title: 'Components/HeaderSearchItem',
  component: HeaderSearchItem
} as ComponentMeta<typeof HeaderSearchItem>

// Defining Storybook base template for HeaderSearchItem Component
export const baseTemplate: ComponentStory<typeof HeaderSearchItem> = (args) =>
  (
    <HeaderSearchItem {...args} />
  )

// Actual stories for HeaderSearchItem Component by copying base function
export const SearchItemDestination = baseTemplate.bind({})
SearchItemDestination.args = {
  fieldType: 'destinationField'
}

export const SearchItemDate = baseTemplate.bind({})
SearchItemDate.args = {
  fieldType: 'calendarField'
}

export const SearchItemPerson = baseTemplate.bind({})
SearchItemPerson.args = {
  fieldType: 'totalPersonAndRoomField'
}

export const SearchItemButton = baseTemplate.bind({})
SearchItemButton.args = {
  fieldType: 'searchButton'
}
