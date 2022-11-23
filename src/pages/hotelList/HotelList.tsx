// Import Third-party Modules
import React, { FC } from 'react'

// Import User-Defined Modules
import { HotelListProps } from '../../interfaces/pages/HotelList.types'
import { NavigationBar } from '../../components/NavigationBar/NavigationBar'
import { Header } from '../../components/Header/Header'

export const HotelsList: FC<HotelListProps> = (_props) => {
  return (
        <div>
            <NavigationBar />
            <Header type='hotelListMode'/>
        </div>
  )
}
