/* eslint-disable @typescript-eslint/consistent-type-assertions */
// Import Third-party Components
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

// Import User-Defined & Styling Components
import { Footer } from './Footer'

// Defining Storybook Component Meta for Footer Component
export default {
  title: 'Components/Footer',
  component: Footer
} as ComponentMeta<typeof Footer>

// Defining Storybook base Template for Footer Component
const baseTemplate: ComponentStory<typeof Footer> = (args) => (
    <Footer {...args}/>
)

// Actual Stories for Footer Component
export const ExampleFooter = baseTemplate.bind({})
ExampleFooter.args = {
  exampleProps: ''
}
