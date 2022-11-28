/* eslint-disable max-len */
// Import Third-party Components
import React, { FC } from 'react'

// Import User Defined Components & Styling from user and third-party
import './FeaturedItem.scss'
import { FeaturedItemProps } from '../../interfaces/components/FeaturedItem/FeaturedItem.types'

export const FeaturedItem: FC<FeaturedItemProps> = (_props) => {
  return (
        <div className="featuredItemContainer">
            <div className="featuredItem">
                <img className='featuredItemImage'
                src="https://imgs.search.brave.com/6QIaIY4Vojk4YoviiHcnuO_DGF8sULboc7YiU1EqaVA/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/UXFobFZGUExZd29s/SDVsWjR6anJRSGFF/OCZwaWQ9QXBp" alt='Dublin City Image'/>
                <div className="featuredItemTitle">
                    <h1>Dublin</h1>
                    <h2>23 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img className='featuredItemImage'
                src='https://imgs.search.brave.com/ObWz32TtNgwmvVMlosNVShXS8HwBKJGcNgj3Ashgebc/rs:fit:715:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5P/V0lBc2NhOFdQNzkz/WXhSMVJJTHNRSGFF/NiZwaWQ9QXBp' alt='Austin City Image'/>
                <div className="featuredItemTitle">
                    <h1>Austin</h1>
                    <h2>532 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img className='featuredItemImage'
                src="https://imgs.search.brave.com/fxDvY3GjeDTP4u6GkjWRp6a4qMiI702cApLOedUjl_4/rs:fit:699:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5a/SGU4aUJpQjJ5TGdL/c1BCSlNqYW5nSGFG/QiZwaWQ9QXBp" alt="Reno City Image" />
                <div className="featuredItemTitle">
                    <h1>Reno</h1>
                    <h2>544 properties</h2>
                </div>
            </div>
        </div>
  )
}
