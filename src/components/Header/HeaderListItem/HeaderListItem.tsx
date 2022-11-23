/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
// Import Third-party Components
import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBed,
  faCar,
  faHotel,
  faPlane,
  faTaxi
} from '@fortawesome/free-solid-svg-icons'

// Import User-defined Components and styles
import './HeaderListItem.scss'
import { HeaderListItemProps } from
  '../../../interfaces/components/Header/HeaderListItem/HeaderListItem.types'

// Function to conditionally pass fontawesome icon
const conditionalFontIcon = (text: string) => {
  switch (text) {
    case 'Stays':
      return <FontAwesomeIcon icon={faHotel} />
    case 'Flight':
      return <FontAwesomeIcon icon={faPlane} />
    case 'Car Rentals':
      return <FontAwesomeIcon icon={faCar} />
    case 'Attractions':
      return <FontAwesomeIcon icon={faBed} />
    case 'Airport Taxis':
      return <FontAwesomeIcon icon={faTaxi} />
    default:
      break
  }
}

export const HeaderListItem: FC<HeaderListItemProps> = ({ spanText }) => {
  return (
        <div className="headerListItem active">
            {conditionalFontIcon(spanText!)}
            <span>{`${spanText!}`}</span>
        </div>
  )
}
