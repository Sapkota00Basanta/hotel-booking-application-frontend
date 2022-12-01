/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
// Import Third-party Components
import { ComponentMeta, ComponentStory } from '@storybook/react'

// Import User-defined Components
import { MostLovedItem } from './MostLovedItem'

// Defing Storybook Component Meta for MostLovedItem Component
export default {
  title: 'Components/MostLovedItem',
  component: MostLovedItem
} as ComponentMeta<typeof MostLovedItem>

// Defining Storybook base template for MostLovedItem Component
export const baseTemplate: ComponentStory<typeof MostLovedItem> = (args) => (
    <MostLovedItem {...args} />
)

// Actual Stories for MostLovedItem Componet by copying base function
export const exampleMostLovedItem = baseTemplate.bind({})
exampleMostLovedItem.args = {
  exampleProps: 'example'
}
