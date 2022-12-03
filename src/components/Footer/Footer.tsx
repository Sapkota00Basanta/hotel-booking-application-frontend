// Import Third-party Components
import React, { FC } from 'react'

// Import User-defined and Style components
import './Footer.scss'
import { FooterProps } from '../../interfaces/components/Footer/Footer.types'

export const Footer: FC<FooterProps> = (_props) => {
  return (
        <div className="footerContainer">
            <div className="footerListContainer">
                <ul className="footerListItems">
                    <li className="footerListItem">Country</li>
                    <li className='footerListItem'>Regions</li>
                    <li className='footerListItem'>Cities</li>
                    <li className='footerListItem'>Districts</li>
                    <li className='footerListItem'>Airports</li>
                    <li className='footerListItem'>Hotels</li>
                </ul>
                <ul className="footerListItems">
                    <li className="footerListItem">Home</li>
                    <li className='footerListItem'>Apartments</li>
                    <li className='footerListItem'>Resorts</li>
                    <li className='footerListItem'>Villas</li>
                    <li className='footerListItem'>Hostels</li>
                    <li className='footerListItem'>Guest Houses</li>
                </ul>
                <ul className="footerListItems">
                    <li className="footerListItem">Unique Places to stay</li>
                    <li className='footerListItem'>All Destinations</li>
                    <li className='footerListItem'>Discover</li>
                    <li className='footerListItem'>Reviews</li>
                    <li className='footerListItem'>Travel communities</li>
                    <li className='footerListItem'>Seasonal and holiday deals</li>
                </ul>
                <ul className="footerListItems">
                    <li className="footerListItem">Car Rentals</li>
                    <li className='footerListItem'>Flight Finder</li>
                    <li className='footerListItem'>Resturant Reservations</li>
                    <li className='footerListItem'>Office Travel Agents</li>
                    {/* <li className='footerListItem'>Airports</li> */}
                    {/* <li className='footerListItem'>Hotels</li> */}
                </ul>
            </div>
        </div>
  )
}
