/* eslint-disable @typescript-eslint/consistent-type-assertions */
// Import Third-party Components
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

// Import USer-Defined Components
import { PropertyList } from './PropertyList'

// Defining Storybook Component Meta for PropertyList Component
export default {
  title: 'Components/PropertyList',
  component: PropertyList
} as ComponentMeta<typeof PropertyList>

// Defining Storybook base template for PropertyList Component
export const baseTemplate: ComponentStory<typeof PropertyList> = (args) => (
    <PropertyList {...args} />
)

// Actual Stories for PropertyList Component by copying base function
export const newProps = baseTemplate.bind({})
newProps.args = {
  props: 'hello'
}
