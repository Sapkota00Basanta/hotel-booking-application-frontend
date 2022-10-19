/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable react/react-in-jsx-scope */
// Import Third-party Components
import { ComponentMeta, ComponentStory } from '@storybook/react'

// Import User-Defined Components
import { Header } from './Header'

// Defining Component Meta for Header Story
export default {
  title: 'Components/Header',
  component: Header
} as ComponentMeta<typeof Header>

// Defining Base Template for Header Story
export const baseTemplate: ComponentStory<typeof Header> = (args) => (
    <Header {...args} />
)

export const exampleHeader = baseTemplate.bind({})
exampleHeader.args = {
  text: 'New Hello Header'
}
