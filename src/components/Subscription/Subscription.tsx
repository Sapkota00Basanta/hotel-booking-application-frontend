// Import Third-party Components
import React, { FC } from 'react'

// Import User-defined and Styling components
import './Subscription.scss'
import { SubcriptionProps } from '../../interfaces/components/Subscription/Subscription.types'

export const Subscription: FC<SubcriptionProps> = (_props) => {
  return (
        <div className="subscription">
            <h1 className="subscriptionTitle">Save Time, Save Money</h1>
            <span className="subscriptionDescription">
              Sign up and we will send the best deals to you</span>
            <div className="subscriptionInputFormContainer">
                <input type="text" placeholder='Enter you mail here!' />
                <button>Subscribe</button>
            </div>
        </div>
  )
}
