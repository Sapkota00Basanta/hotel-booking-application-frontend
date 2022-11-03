/* eslint-disable @typescript-eslint/no-non-null-assertion */
// Import Third-party Components
import React, { FC } from 'react'

// Import Styling Components
import './Header.scss'
import 'react-date-range/dist/styles.css' // main css file for Date Range Package
import 'react-date-range/dist/theme/default.css' // theme css file for Date Range Package

// Import User-defined Componets
import {
  HeaderProps
} from '../../interfaces/components/Header/Header.types'
import { HeaderListItem } from './HeaderListItem/HeaderListItem'
import { HeaderSearchItem } from './HeaderSearchItem/HeaderSearchItem'

// Props Values for HeaderListItem Component
const HeaderListItemProps = {
  fahotel: 'Stays',
  faPlane: 'Flights',
  faCar: 'Car Rentals',
  faBed: 'Attractions',
  faTaxi: 'Airport Taxis'
}

// Props Values for HeaderSearchItem Component
const HeaderSearchItemProps = ['faBed', 'faCalendarDays', 'faPerson', 'searchButton']

export const Header: FC<HeaderProps> = (props) => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          {
            // Iterating through HeaderListItemProps Object to pass values to HeaderListItem
            Object.entries(HeaderListItemProps).map(([iconType, spanText], index) => (
              <HeaderListItem key={index} iconType={iconType} spanText={spanText} />
            ))
          }
        </div>
        <h1 className="headerTitle">
          A Lifetime of discounts ? It&apos;s Genius.
        </h1>
        <p className="headerDescription">
          Get rewarded for your travels - unlock instant saving upto 10%
        </p>
        <button className="headerButton">SignIn/Register</button>
        <div className="headerSearch">
          { HeaderSearchItemProps.map((iconType, index) => (
            <HeaderSearchItem key={index} iconType={iconType} />
          ))}
        </div>
      </div>
    </div>
  )
}
