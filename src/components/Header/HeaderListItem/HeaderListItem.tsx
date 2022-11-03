/* eslint-disable @typescript-eslint/no-non-null-assertion */
// Import Third-party Components
import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Import User-defined Components and styles
import './HeaderListItem.scss'
import { HeaderListItemProps } from
  '../../../interfaces/components/Header/HeaderListItem/HeaderListItem.types'
import { IconName } from '@fortawesome/free-solid-svg-icons'

export const HeaderListItem: FC<HeaderListItemProps> = ({ iconType, spanText }) => {
  return (
        <div className="headerListItem active">
            <FontAwesomeIcon icon={iconType as IconName} />
            <span>{`${spanText!}`}</span>
        </div>
  )
}
