import React from "react";
import MyNavBar from "./common/components/MyNavBar";
// import MyFooter from "./common/components/Footer";
import HomePage from "./pages/home";
import AllEvents from "./pages/AllEvents";
import ViewEvent from "./pages/ViewEvent";
import AllTickets from "./pages/allTickets";
import CreateEvent from "./pages/createEvent";
import TicketDetails from "./pages/ticketDetails";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {
  return (
    <Router>
    <MyNavBar />
    <div className="App">
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/event' element={<ViewEvent/>} />
        <Route path='/events' element={<AllEvents/>} />
        <Route path='/tickets' element={<AllTickets/>} />
        <Route path='/createevents' element={<CreateEvent/>} />
        <Route path='/ticketdetails' element={<TicketDetails/>} />
    </Routes>
    </div>
    {/* <MyFooter /> */}
    </Router>
  );
}

export default App;
