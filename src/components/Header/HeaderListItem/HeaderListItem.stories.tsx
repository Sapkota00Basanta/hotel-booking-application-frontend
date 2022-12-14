/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
// Import Third-party components
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// Import User-Defined Components
import { HeaderListItem } from './HeaderListItem'

// Defining Storybook ComponentMeta for HeaderListItem Component
export default {
  title: '/Components/HeaderListItem',
  component: HeaderListItem
} as ComponentMeta<typeof HeaderListItem>

// Defining Storybook base template for HeaderListItem Componenet
export const baseTemplate: ComponentStory<typeof HeaderListItem> = (args) =>
  (
    <HeaderListItem {...args} />
  )

// Acutal stories for HeaderListItem Component by copying base function
export const ListItemStays = baseTemplate.bind({})
ListItemStays.args = {
  spanText: 'Stays'
}

export const ListItemFlights = baseTemplate.bind({})
ListItemFlights.args = {
  spanText: 'Flights'
}

export const ListItemCarRentals = baseTemplate.bind({})
ListItemCarRentals.args = {
  spanText: 'CarRentals'
}

export const ListItemAttractions = baseTemplate.bind({})
ListItemAttractions.args = {
  spanText: 'Attractions'
}

export const ListItemAirportTaxis = baseTemplate.bind({})
ListItemAirportTaxis.args = {
  spanText: 'Airport Taxis'
}
