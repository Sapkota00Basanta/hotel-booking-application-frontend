// Import Thirdparty modules
import React, { FC } from 'react'

// Importing Styling Prpoerties
import './Home.scss'

// Importing components for pages
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { HomeProps } from '../../interfaces/pages/HomePage.types'
import { Subscription } from '../../components/Subscription/Subscription'
import { PropertyList } from '../../components/PropertyList/PropertyList'
import { FeaturedItem } from '../../components/FeaturedItem/FeaturedItem'
import { MostLovedItem } from '../../components/MostLovedItem/MostLovedItem'
import { NavigationBar } from '../../components/NavigationBar/NavigationBar'

export const Home: FC<HomeProps> = (_props) => {
  return (
    <div>
      <NavigationBar />
      <Header />
      <div className="homeContainer">
        <FeaturedItem />
        <h1 className="homePropertyTitle">Based on Property Type</h1>
        <PropertyList />
        <h1 className="homePropertyTitle">Most loved homes</h1>
        <MostLovedItem />
        <Subscription />
        <Footer />
      </div>
    </div>
  )
}
