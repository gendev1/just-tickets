import Ticket from "./components/Ticket";

function AllTickets() {
  return (
    <div className="all-tickets-container">
      <section className="section">
        <div className="container">
          <h4>Upcoming events</h4>
          <br />
          <div className="columns is-flex-wrap-wrap is-flex">
            <Ticket />
            <Ticket />
            <Ticket />
          </div>
          <hr />
          <h4>Past Events</h4>
          <br />
          <div className="columns is-flex-wrap-wrap is-flex">
            <Ticket />
            <Ticket />
            <Ticket />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AllTickets;
