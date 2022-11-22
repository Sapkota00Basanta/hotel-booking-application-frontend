/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/restrict-plus-operands */

// Import Third-party Components
import React, { FC, MouseEventHandler, useState } from 'react'
import { IconName } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'

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

export const HeaderSearchItem: FC<HeaderSearchItemProps> = ({ iconType }) => {
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
    switch (totalPersonAndRoomKey) {
      case 'adult':
        setTotalPersonAndRoom(previousValue => {
          return {
            ...previousValue,
            adult: totalPersonAndRoomOperator === 'increment'
              ? totalPersonAndRoom.adult + 1
              : totalPersonAndRoom.adult - 1
          }
        })
        break
      case 'children':
        setTotalPersonAndRoom(previousValue => {
          return {
            ...previousValue,
            children: totalPersonAndRoomOperator === 'increment'
              ? totalPersonAndRoom.children + 1
              : totalPersonAndRoom.children - 1
          }
        })
        break
      default:
        setTotalPersonAndRoom(previousValue => {
          return {
            ...previousValue,
            room: totalPersonAndRoomOperator === 'increment'
              ? totalPersonAndRoom.room + 1
              : totalPersonAndRoom.room - 1
          }
        })
        break
    }
  }

  // Dynamically pass JSX based on iconType Props Value
  switch (iconType) {
    case 'faBed':
      return (
        <div className="headerSearchItem">
          <FontAwesomeIcon
            icon={iconType as IconName}
            className="headerSearchItemIcon"
          />
          <input
            type="text"
            placeholder="Where are you going?"
            className="headerSearchItemInput"
          />
        </div>
      )
    case 'faCalendarDays':
      return (
        <div className="headerSearchItem">
          <FontAwesomeIcon
            icon={iconType as IconName}
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
    case 'faPerson':
      return (
        <div className="headerSearchItem">
          <FontAwesomeIcon
            icon={iconType as IconName}
            className="headerSearchItemIcon"
          />
          <span className="headerSearchItemText">
            `{totalPersonAndRoom.adult} adult - {totalPersonAndRoom.children}{' '}
            children - {totalPersonAndRoom.room} room`
          </span>
          <div className="options">
            <div className="optionItem">
              <span className="optionItemText">Adult</span>
              <div className="optionItemCounter">
                <button className="optionItemCounterButton"
                onClick={() =>
                  handleHeaderSearchItemOptionItemCounter(
                    { totalPersonAndRoomKey: 'adult', totalPersonAndRoomOperator: 'decrement' })
                  }>-</button>
                <span className="optionItemCounterNumber">1</span>
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
                <button className="optionItemCounterButton" onClick={() => {
                  handleHeaderSearchItemOptionItemCounter(
                    { totalPersonAndRoomKey: 'children', totalPersonAndRoomOperator: 'decrement' }
                  )
                }}>-</button>
                <span className="optionItemCounterNumber">0</span>
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
                <button className="optionItemCounterButton" onClick={() => {
                  handleHeaderSearchItemOptionItemCounter(
                    { totalPersonAndRoomKey: 'room', totalPersonAndRoomOperator: 'decrement' }
                  )
                }}>-</button>
                <span className="optionItemCounterNumber">1</span>
                <button className="optionItemCounterButton" onClick={() => {
                  handleHeaderSearchItemOptionItemCounter(
                    { totalPersonAndRoomKey: 'room', totalPersonAndRoomOperator: 'increment' }
                  )
                }}>+</button>
              </div>
            </div>
          </div>
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
