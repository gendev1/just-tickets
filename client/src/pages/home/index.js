import React, { useEffect, useState } from "react";
import banner from "../../assets/images/banner.jpeg"
import Web3Modal from "web3modal";
import { ethers } from "ethers";

import axios from "axios";

function HomePage()  {
  const [events, setEvents] = useState([]);
 


  return (
    <div className="home-page-container">
        <div className="container">
            {/* title page */}
            <section className="section pb-0">
  
      <div className="columns is-justify-content-space-between is-align-items-center">
         <div className="column is-7-desktop has-text-centered-mobile has-text-centered-tablet has-text-left-desktop">
            <h1 className="mb-4">Just Tickets Magico</h1>
            <p className="mb-4">The first crypto event ticketing system that incentivises you when you attend an event</p>
            <form className="search-wrapper" action="search.html">
               <input id="search-by" name="s" type="search" className="input input-lg"
                  placeholder="Search Here..." />
               <button type="submit" className="btn btn-primary">Search</button>
            </form>
         </div>
         <div className="column is-4-desktop hidden-on-tablet">
            <img src={banner} alt="illustration" className="img-fluid" />
         </div>
      </div>
   
</section>
        </div>
    </div>
    // <Container centerContent>
    //   <h3>Current Events</h3>
    //   <Box w="1000px">
    //     <Stack direction="row" justifyContent="center">
    //       <Wrap>{renderEvents()}</Wrap>
    //     </Stack>
    //   </Box>
    //   <Link to={"/new"}>
    //     <Button my={5} size="lg" colorScheme="blue">
    //       Create New Event
    //     </Button>
    //   </Link>
    // </Container>
  );
};

export default HomePage;