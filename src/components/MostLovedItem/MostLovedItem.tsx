/* eslint-disable max-len */
// Import Third-party Components
import React, { FC } from 'react'

// Import User-defined and style components
import './MostLovedItem.scss'
import { MostLovedItemProps } from '../../interfaces/components/MostLovedItem/MostLovedItem.types'

export const MostLovedItem: FC<MostLovedItemProps> = (_props) => {
  return (
        <div className="mostLovedItems">
            <div className="mostLovedItem">
                <img
                    src="https://imgs.search.brave.com/r1W-qyo2U99a0KHnkVhIHZjg97SbdOOUvfJ06e66ivk/rs:fit:1003:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5i/UjVOUFhBREJhWDlU/UVVETzFxYUlBSGFE/ZyZwaWQ9QXBp"
                    alt='Most Loved Item Image'
                    className="mostLovedItemImage"
                />
                <span className='mostLovedItemName'>ApartHotel Maestro</span>
                <span className="mostLovedItemCity">Mexico</span>
                <span className="mostLovedItemPrice">Starting from $1200</span>
                <div className="mostLovedItemRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="mostLovedItem">
                <img
                    src="https://imgs.search.brave.com/r1W-qyo2U99a0KHnkVhIHZjg97SbdOOUvfJ06e66ivk/rs:fit:1003:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5i/UjVOUFhBREJhWDlU/UVVETzFxYUlBSGFE/ZyZwaWQ9QXBp"
                    alt="Most Loved Item Image"
                    className='mostLovedItemImage'
                />
                <span className="mostLovedItemName">ApartHote Maestro</span>
                <span className="mostLovedItemCity">Mexico</span>
                <span className="mostLovedItemPrice">Starting from $1200</span>
                <div className="mostLovedItemRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="mostLovedItem">
                <img
                    src="https://imgs.search.brave.com/r1W-qyo2U99a0KHnkVhIHZjg97SbdOOUvfJ06e66ivk/rs:fit:1003:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5i/UjVOUFhBREJhWDlU/UVVETzFxYUlBSGFE/ZyZwaWQ9QXBp"
                    alt="Most Loved Item Image"
                    className='mostLovedItemImage'
                />
                <span className="mostLovedItemName">ApartHote Maestro</span>
                <span className="mostLovedItemCity">Mexico</span>
                <span className="mostLovedItemPrice">Starting from $1200</span>
                <div className="mostLovedItemRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="mostLovedItem">
                <img
                    src="https://imgs.search.brave.com/r1W-qyo2U99a0KHnkVhIHZjg97SbdOOUvfJ06e66ivk/rs:fit:1003:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5i/UjVOUFhBREJhWDlU/UVVETzFxYUlBSGFE/ZyZwaWQ9QXBp"
                    alt="Most Loved Item Image"
                    className='mostLovedItemImage'
                />
                <span className="mostLovedItemName">ApartHote Maestro</span>
                <span className="mostLovedItemCity">Mexico</span>
                <span className="mostLovedItemPrice">Starting from $1200</span>
                <div className="mostLovedItemRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
  )
}
