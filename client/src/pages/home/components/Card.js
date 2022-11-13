import banner from "../../../assets/images/banner.jpeg";

function EventCard({ heading, details, eventLink, imgUrl }) {
  return (
    <div className="column is-3-widescreen is-4-desktop is-6-tablet">
      <div className="card match-height">
        <div className="media">
          <img
            src={imgUrl}
            alt="illustration"
            className="img-fluid"
            height="50px"
          />
        </div>
        <div className="card-body">
          <h3 className="card-title h4">{heading}</h3>
          <p className="card-text">
            Cras at dolor eget urna varius faucibus tempus in elit dolor sit
            amet.
          </p>
          <br />
          <br />

          <a
            href="list.html"
            className="button btn  is-fullwidth btn-sm btn-primary stretched-link">
            Go to event
          </a>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
