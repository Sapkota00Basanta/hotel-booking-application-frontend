/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/restrict-plus-operands */

// Import Third-party Components
import { format } from 'date-fns'
import React, { FC, MouseEventHandler, useState } from 'react'
import {
  faBed,
  faCalendarDays,
  faPerson
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range'

// Import User Defined Components & Styling from user and third party
import './HeaderSearchItem.scss'
import 'react-date-range/dist/styles.css' // main css file for Date Range Package
import 'react-date-range/dist/theme/default.css' // theme css file for Date Range Package
import {
  HeaderSearchItemProps,
  DateRangeStateProps,
  TotalPersonAndRoomProps,
  TotalPersonAndRoomEventHandlerProps
} from '../../../interfaces/components/Header/HeaderSearchItem/HeaderSearchItem.types'

export const HeaderSearchItem: FC<HeaderSearchItemProps> = ({ fieldType }) => {
  // Defing States for Date Range Element
  const [date, setDate] = useState<DateRangeStateProps>([
    { startDate: new Date(), endDate: new Date(), key: 'selection' }
  ])
  const [showDateRangeComponent, setShowDateRangeComponent] =
    useState<boolean>(false)
  // Definig States for Total Person & Room Element
  const [totalPersonAndRoom, setTotalPersonAndRoom] =
    useState<TotalPersonAndRoomProps>({
      adult: 1,
      children: 0,
      room: 1
    })
  const [showTotalPersonAndRoom, setShowTotalPersonAndRoom] =
    useState<boolean>(false)

  // Event Handlers for HeaderSearchItem Component Elements
  const toggleDateRangeComponent: MouseEventHandler<HTMLSpanElement> = (
    event
  ): void => {
    event.preventDefault()
    setShowDateRangeComponent(!showDateRangeComponent)
  }
  const toggleTotalPersonAndRoomComponent: MouseEventHandler<HTMLSpanElement> =
    (event): void => {
      event.preventDefault()
      setShowTotalPersonAndRoom(!showTotalPersonAndRoom)
    }
  const handleHeaderSearchItemOptionItemCounter =
  ({ totalPersonAndRoomKey, totalPersonAndRoomOperator }:
  TotalPersonAndRoomEventHandlerProps): void => {
    setTotalPersonAndRoom(previousValue => {
      return {
        ...previousValue,
        [totalPersonAndRoomKey]: totalPersonAndRoomOperator === 'increment'
          ? totalPersonAndRoom[totalPersonAndRoomKey] + 1
          : totalPersonAndRoom[totalPersonAndRoomKey] - 1
      }
    })
  }

  // Dynamically pass JSX based on iconType Props Value
  switch (fieldType) {
    case 'destinationField':
      return (
        <div className="headerSearchItem">
          <FontAwesomeIcon
            icon={faBed}
            className="headerSearchItemIcon"
          />
          <input
            type="text"
            placeholder="Where are you going?"
            className="headerSearchItemInput"
          />
        </div>
      )
    case 'calendarField':
      return (
        <div className="headerSearchItem">
          <FontAwesomeIcon
            icon={faCalendarDays}
            className="headerSearchItemIcon"
          />
          <span
            onClick={toggleDateRangeComponent}
            className="headerSearchItemText"
          >
            {`${format(date[0].startDate!, 'dd/MM/yyyy')} 
                to ${format(date[0].endDate!, 'dd/MM/yyyy')}`}
          </span>
          {showDateRangeComponent && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="headerSearchItemDate"
            />
          )}
        </div>
      )
    case 'totalPersonAndRoomField':
      return (
        <div className="headerSearchItem">
          <FontAwesomeIcon
            icon={faPerson}
            className="headerSearchItemIcon"
          />
          <span
          onClick={toggleTotalPersonAndRoomComponent}
          className="headerSearchItemText">
            `{totalPersonAndRoom.adult} adult - {totalPersonAndRoom.children}{' '}
            children - {totalPersonAndRoom.room} room`
          </span>
          { showTotalPersonAndRoom &&
          <div className="options">
            <div className="optionItem">
              <span className="optionItemText">Adult</span>
              <div className="optionItemCounter">
                <button className="optionItemCounterButton"
                disabled={totalPersonAndRoom.adult <= 1}
                onClick={() =>
                  handleHeaderSearchItemOptionItemCounter(
                    { totalPersonAndRoomKey: 'adult', totalPersonAndRoomOperator: 'decrement' })
                  }>-</button>
                <span className="optionItemCounterNumber">{`${totalPersonAndRoom.adult}`}</span>
                <button className="optionItemCounterButton"
                onClick={() =>
                  handleHeaderSearchItemOptionItemCounter(
                    { totalPersonAndRoomKey: 'adult', totalPersonAndRoomOperator: 'increment' })
                   }>+</button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionItemText">Children</span>
              <div className="optionItemCounter">
                <button className="optionItemCounterButton"
                disabled={totalPersonAndRoom.children <= 0}
                onClick={() => {
                  handleHeaderSearchItemOptionItemCounter(
                    { totalPersonAndRoomKey: 'children', totalPersonAndRoomOperator: 'decrement' }
                  )
                }}>-</button>
                <span className="optionItemCounterNumber">{`${totalPersonAndRoom.children}`}</span>
                <button className="optionItemCounterButton" onClick={() => {
                  handleHeaderSearchItemOptionItemCounter(
                    { totalPersonAndRoomKey: 'children', totalPersonAndRoomOperator: 'increment' }
                  )
                }}>+</button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionItemText">Room</span>
              <div className="optionItemCounter">
                <button className="optionItemCounterButton"
                disabled={totalPersonAndRoom.room <= 1}
                onClick={() => {
                  handleHeaderSearchItemOptionItemCounter(
                    { totalPersonAndRoomKey: 'room', totalPersonAndRoomOperator: 'decrement' }
                  )
                }}>-</button>
                <span className="optionItemCounterNumber">{`${totalPersonAndRoom.room}`}</span>
                <button className="optionItemCounterButton" onClick={() => {
                  handleHeaderSearchItemOptionItemCounter(
                    { totalPersonAndRoomKey: 'room', totalPersonAndRoomOperator: 'increment' }
                  )
                }}>+</button>
              </div>
            </div>
          </div>
          }
        </div>
      )
    case 'searchButton':
      return (
        <div className="headerSearchItem">
          <button className="headerSearchItemButton">Search</button>
        </div>
      )
    default:
      return null
  }
}
