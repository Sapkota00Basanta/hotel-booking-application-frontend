// Import Thirdparty modules
import React, { FC } from 'react'

// Importing Styling Prpoerties
import './Home.scss'

// Importing components for pages
import { NavBar } from '../../components/NavBar/NavBar'
import { Header } from '../../components/Header/Header'
import { HomeProps } from '../../interfaces/pages/HomePage.types'

export const Home: FC<HomeProps> = (_props) => {
  return (
        <div >
            <NavBar />
            <Header text="Hello from Header" />
        </div>
  )
}
