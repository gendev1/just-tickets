import EventCard from "../../common/components/Card";

function EventsPage() {

  return (
    <div className="home-page-container">
      <div className="container">
        {/* title page */}
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
  );
}

export default EventsPage;
