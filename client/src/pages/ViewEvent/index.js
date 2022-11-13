import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function EventPage() {
  return (
    <div className="home-page-container">
      <div className="container">
        {/* title page */}
        <section className="section pb-0">
          <div className="columns is-justify-content-space-between ">
            <div className="column is-8-desktop is-flex-tablet">
              <img
                src="https://img.freepik.com/free-vector/music-event-poster-template-with-colorful-shapes_1361-1591.jpg?w=2000"
                alt="illustration"
                className="img-fluid"
              />
            </div>
            <div class="card column is-4-desktop">
              <div>
                <h3 class="card-header-title">Bored Ape Tron Club Party</h3>
                <p class="subtitle is-6 pl-4">0x25asdfa523aaae3cas5</p>
              </div>
              <hr />
              <div class="content p-4">
                <h6>Description</h6>
                <p>
                  Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at
                  eros. Donec id elit non mi porta gravida at eget metus. Cum
                  sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Cras mattis consectetur purus sit amet
                  fermentum.
                </p>
                <hr />
                <h6>Date of Event </h6>
                <p>26 November, 2022</p>
                <h6>Location </h6>
                <p>50 Church St, Cambridge MA</p>
                <hr />
                <button className="button btn  is-fullwidth btn-sm btn-primary stretched-link">
                  Buy Tickets
                </button>
              </div>
            </div>
            {/* <div className="column ">
                <h2>Bored Ape Tron Club Party</h2>
                <p>By Bob McBob</p>
                <h4>11th November 2022</h4>
            </div> */}
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
