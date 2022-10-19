/* eslint-disable @typescript-eslint/no-non-null-assertion */
// Import Third-party Components
import React, { FC, useState } from 'react'
import {
  faBed,
  faCalendarDays,
  faCar,
  faHotel,
  faPerson,
  faPlane,
  faTaxi
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'

// Import Styling Components
import './Header.scss'
import 'react-date-range/dist/styles.css' // main css file for Date Range Package
import 'react-date-range/dist/theme/default.css' // theme css file for Date Range Package

// Import User-defined Componets
import { HeaderProps, DateRangeStateProps } from '../../interfaces/components/Header.types'

export const Header: FC<HeaderProps> = (props) => {
  // Defing State for Date Element
  const [date, setDate] = useState<DateRangeStateProps>([
    { startDate: new Date(), endDate: new Date(), key: 'selection' }
  ])
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faHotel} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxiss</span>
          </div>
        </div>
        <h1 className="headerTitle">
          A Lifetime of discounts ? It&apos;s Genius.
        </h1>
        <p className="headerDescription">
          Get rewarded for your travels - unlock instant saving upto 10%
        </p>
        <button className="headerButton">SignIn/Register</button>
        <div className="headerSearch">
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faBed} className="headerSearchIcon" />
              <input
                type="text"
                placeholder="Where are you going?"
                className="headerSearchInput"
              />
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarDays} className="headerSearchIcon" />
              <span className="headerSearchText">
                {`${format(date[0].startDate!, 'dd/MM/yyyy')} 
                to ${format(date[0].endDate!, 'dd/MM/yyyy')}`}
              </span>
              <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="headerSearchDate"
  />
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faPerson} className="headerSearchIcon" />
              <span className="headerSearchText">
                2 adults 2 children 1 room
              </span>
            </div>
            <div className="headerSearchItem">
                <button className="headerButton">Search</button>
            </div>
        </div>
      </div>
    </div>
  )
}
