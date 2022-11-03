/* eslint-disable @typescript-eslint/indent */
/*
 Defining interface for HeaderListItem Component
*/

// Import IconName Type Defination from FontAwesomeIcon
import { IconName } from '@fortawesome/fontawesome-svg-core'

// HeaderListItem Component Props Type Defination
export interface HeaderListItemProps {
    iconType?: IconName | string
    spanText?: string
}
