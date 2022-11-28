// Import Thirdparty modules
import React, { FC } from 'react'

// Importing Styling Prpoerties
import './Home.scss'

// Importing components for pages
import { Header } from '../../components/Header/Header'
import { FeaturedItem } from '../../components/FeaturedItem/FeaturedItem'
import { HomeProps } from '../../interfaces/pages/HomePage.types'
import { NavigationBar } from '../../components/NavigationBar/NavigationBar'

export const Home: FC<HomeProps> = (_props) => {
  return (
        <div >
            <NavigationBar />
            <Header />
            <div className="homeContainer">
              <FeaturedItem />
            </div>
        </div>
  )
}
