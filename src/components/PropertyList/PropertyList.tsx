/* eslint-disable max-len */
// Import Third-party Components
import React, { FC } from 'react'

// Import User-Defined & Styling Components
import './PropertyList.scss'
import { PropertyListProps } from '../../interfaces/components/PropertyList/PropertyList.types'

export const PropertyList: FC<PropertyListProps> = (_props) => {
  return (
            <div className="propertyListItems">
                <div className="propertyListItem">
                    <img
                    src="https://imgs.search.brave.com/xy4_fERC1CXK_dn4eCLjW5PAffPQiInBjo4gs75qKHY/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC55/N1NXbW5mMVIzVkVf/V19iT09HdHhnSGFF/byZwaWQ9QXBp"
                    alt='HOtel Image'
                    className="propertyListItemImage"
                    />
                    <div className="propertyListItemImageTitle">
                        <h1>Hotels</h1>
                        <h2>233 hotels</h2>
                    </div>
                </div>
                <div className="propertyListItem">
                    <img
                    src="https://imgs.search.brave.com/l2X-PcMCwYJ_wOHOZFGjK6Ri_o04YnEfzTe9WJNGxfk/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5o/b21lZGV6ZW4uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE0/LzA0L1N0dW5uaW5n/LWxvZnQtYXBhcnRt/ZW50LXdpdGgtc3Bl/Y3RhY3VsYXItdmll/d3Mtb2YtU3RvY2to/b2xtLTAxLmpwZw"
                    alt="Apartment Image"
                    className="propertyListItemImage"
                    />
                    <div className="propertyListItemImageTitle">
                        <h1>Apartments</h1>
                        <h2>563 hotels</h2>
                    </div>
                </div>
                <div className="propertyListItem">
                    <img
                    src="https://imgs.search.brave.com/P1HAfw4YA8bIbOJ55E3BVqfsP-Ac1eUpVMk2BIonmTM/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/RFRQZUZGUnVwcE1u/ZzhJU2ZSZHJ3SGFF/byZwaWQ9QXBp"
                    alt='Resort Image'
                    className="propertyListItemImage"
                    />
                    <div className="propertyListItemImageTitle">
                        <h1>Resorts</h1>
                        <h2>343 hotels</h2>
                    </div>
                </div>
                <div className="propertyListItem">
                    <img
                    src="https://imgs.search.brave.com/gI-QvvenhLWuE7rUwvXYi20UDXWSyL3FEYK1fpoLzsE/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5f/Z2VRcVlHcUhteHFj/Skhvc3gxSlR3SGFF/OCZwaWQ9QXBp"
                    alt='Villa Image'
                    className="propertyListItemImage"
                    />
                    <div className="propertyListItemImageTitle">
                        <h1>Villas</h1>
                        <h2>564 hotels</h2>
                    </div>
                </div>
                <div className="propertyListItem">
                    <img
                    src="https://imgs.search.brave.com/9CAuQdgwJ61Pt-6AhLLsSbCfIOvCsNjZEBG_nGPEeTs/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC55/Z0cxNk04RzZNaXN6/U0JuVHI5RDZBSGFF/OCZwaWQ9QXBp"
                    alt="Cabin Image"
                    className="propertyListItemImage"
                    />
                    <div className="propertyListItemImageTitle">
                        <h1>Cabins</h1>
                        <h2>464 hotels</h2>
                    </div>
                </div>
            </div>
  )
}
