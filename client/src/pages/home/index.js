import React, { useEffect, useState } from "react";
import banner from "../../assets/images/banner.jpeg";
import EventCard from "../../common/components/Card";

function HomePage() {
  return (
    <div className="home-page-container">
      <div className="container">
        {/* title page */}
        <section className="section pb-0">
          <div className="columns is-justify-content-space-between is-align-items-center">
            <div className="column is-7-desktop has-text-centered-mobile has-text-centered-tablet has-text-left-desktop">
              <h1 className="mb-4">Just Tickets</h1>
              <h4 className="mb-4">Where Magic happens</h4>
              <p className="mb-4">
                The first crypto event ticketing system that incentivises you
                when you attend an event
              </p>
              <form className="search-wrapper" action="search.html">
                <input
                  id="search-by"
                  name="s"
                  type="search"
                  className="input input-lg"
                  placeholder="Search Here..."
                />
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </form>
            </div>
            <div className="column is-4-desktop hidden-on-tablet">
              <img src={banner} alt="illustration" className="img-fluid" />
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <section>
          <h2>Happening Right Now</h2>
          <p>Popular events near you</p>
          <br />

          <div className="columns is-flex-wrap-wrap is-flex">
            <EventCard
              heading={"Madman concert for degens"}
              imgUrl={
                "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              }
            />
            <EventCard
              heading={"Bored ape yacht club party"}
              imgUrl={
                "https://static.ra.co/images/news/2015/hd-cancelled-news-15.jpg"
              }
            />
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
}

export default HomePage;
