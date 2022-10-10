//Third-Party Modules
import { Route, Routes, BrowserRouter } from "react-router-dom";

//User-Defined Modules 
/*
  Note: For exporting component preferably don't use default components for confusion
*/
import {Home} from "./pages/home/Home";
import {Hotel} from "./pages/hotel/Hotel";
import {HotelsList} from "./pages/hotelList/HotelList";

//App Component with Routes Defined
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel" element={<HotelsList />} />
        <Route path="/hotel/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
};
