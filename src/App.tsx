// Third-Party Modules
import React, { FC } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

// User-Defined Modules
/*
  Note: For exporting component preferably don't use default components for confusion
*/
import { Home } from './pages/home/Home'
import { Hotel } from './pages/hotel/Hotel'
import { HotelsList } from './pages/hotelList/HotelList'
import { AppProps } from './interfaces/App.types'

// App Component with Routes Defined
export const App: FC<AppProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home props={''} />} />
        <Route path="/hotels" element={<HotelsList props={''}/>} />
        <Route path="/hotel/:id" element={<Hotel props={''}/>} />
      </Routes>
    </BrowserRouter>
  )
}
