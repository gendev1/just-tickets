import React, { useEffect, useState } from "react";
import banner from "../../assets/images/banner.jpeg";


function EventPage() {
  return (
    <div className="home-page-container">
      <div className="container">
        {/* title page */}
        <section className="section pb-0">
          <div className="columns is-justify-content-space-between is-align-items-center">
            <div className="column is-7-desktop is-flex-tablet">
              <img src="https://static.vecteezy.com/system/resources/previews/000/692/604/original/party-crowd-banner-design-vector.jpg" alt="illustration" className="img-fluid" />
            </div>
            <div className="column ">
                <h2>Bored Ape Tron Club Party</h2>
                <p>By Bob McBob</p>
                <h4>11th November 2022</h4>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
    
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
}

export default EventPage;

// Name of event
// Name of Organizer
// Date of event
// Location of event
// Price of ticket starting at $ XYZ

// 
