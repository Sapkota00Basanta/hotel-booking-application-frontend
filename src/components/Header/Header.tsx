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
const HeaderListItemProps = [
  'Stays',
  'Flights',
  'Car Rentals',
  'Attractions',
  'Airport Taxis'
]

// Props Values for HeaderSearchItem Component
const HeaderSearchItemProps = ['destinationField', 'calendarField',
  'totalPersonAndRoomField', 'searchButton']

export const Header: FC<HeaderProps> = ({ displayFormat }) => {
  return (
    <div className="header">
      <div className={displayFormat === 'hotelListMode'
        ? 'headerContainer listMode'
        : 'headerContainer'}>
        <div className="headerList">
          {
            HeaderListItemProps.map((spanText, index) => {
              return (
                <HeaderListItem key={index} spanText={spanText} />
              )
            })
          }
        </div>
        {displayFormat !== 'hotelListMode' && <><h1 className="headerTitle">
          A Lifetime of discounts ? It&apos;s Genius.
        </h1>
        <p className="headerDescription">
          Get rewarded for your travels - unlock instant saving upto 10%
        </p>
        <button className="headerButton">SignIn/Register</button>
        <div className="headerSearch">
          { HeaderSearchItemProps.map((fieldValue, index) => (
            <HeaderSearchItem key={index} fieldType={fieldValue} />
          ))}
        </div>
        </>
        }
      </div>
    </div>
  )
}
