/* eslint-disable @typescript-eslint/consistent-type-assertions */
// Import Third-party Components
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

// Import User-defined and styling components
import { Subscription } from './Subscription'

// Defining Storybook ComponentMeta form Subscription Component
export default {
  title: 'Components/Subscription',
  component: Subscription
} as ComponentMeta<typeof Subscription>

// Defining Storybook base template for Subscription Component
const baseTemplate: ComponentStory<typeof Subscription> = (args) => (
    <Subscription {...args} />
)

// Actual stories for Subscription Component
export const ExampleTemplate = baseTemplate.bind({})
ExampleTemplate.args = {
  exampleProps: ''
}
