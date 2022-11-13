import { Link } from "react-router-dom";
function Ticket() {
  return (
    <div className="column is-6 mb-5">
      <div className=" shadow rounded content">
        <div className="columns">
          <div className="column p-0 is-4">
            <img
              src="https://picsum.photos/200/300"
              alt="illustration"
              className="img-fluid"
            />
          </div>
          <div className="column pt-6 is-8">
            <h4>Madmax Tribe Meetup</h4>
            <p>Boston, MA</p>
            <span>26 November,2022</span>
            <br />
            <br />
            <br />
            <br />
            <Link
            to={"/ticketdetails"}>
            <button className="button btn-primary stretched-link">
              Details
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
