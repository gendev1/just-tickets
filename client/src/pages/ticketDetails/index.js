import DetailsRow from "./components/detailsRow";
import randqr from "../../assets/images/randqr.png";

function TicketDetails() {
  return (
    <div className="ticket-details-container">
      <section className="section">
        <div className="container">
          <div className="columns is-desktop is-justify-content-center">
            <div className="column is-8-desktop">
              <div className="p-6 shadow rounded content">
                <h2 className="section-title">Event Ticket</h2>
                <hr />
                <div className="columns is-multiline">
                  <div className="column is-12 has-text-centered">
                    <img
                      src={randqr}
                      alt="qr code"
                      className="fluid-img is-centered"
                    />
                  </div>
                  <div className="column is-12 m-0 p-0">
                    <hr />
                  </div>
                  <DetailsRow
                    heading={"Event Name"}
                    value="Mad Man Tribe Meetup"
                  />
                  <DetailsRow heading={"Location"} value="Boston, MA" />
                  <DetailsRow heading={"Event Time"} value="26 Nov, 2022" />
                  <div className="column is-12 m-0 p-0">
                    <hr />
                  </div>

                  <DetailsRow
                    heading={"Organiser"}
                    value="0x25asdfa523aaae3cas5"
                  />

                  <DetailsRow
                    heading={"Perks"}
                    value="Front Row seat, access to after party meetup"
                  />
                </div>
                <div className="column is-12 m-0 p-0">
                  <hr />
                </div>
                <h2 className="section-title">Order Details</h2>
                <hr />
                <div className="columns is-multiline">
                  <DetailsRow heading={"Ticket Fee"} value="20 TRX" />
                  <DetailsRow heading={"Platform Fee"} value="6.2 TRX" />
                  <div className="column is-12 m-0 p-0">
                    <hr />
                  </div>
                  <DetailsRow heading={"Total Fee"} value="26.2 TRX" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default TicketDetails;
