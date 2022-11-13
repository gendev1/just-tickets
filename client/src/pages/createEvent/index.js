import React, { useState, useEffect } from "react";

function CreateEvent() {
  const [isVerified, setIsVerified] = useState(true);

  const renderNotVerified = (
    <section className="section">
      <div className="container">
        <div className="columns is-desktop is-justify-content-center">
          <div className="column is-8-desktop">
            <div className="p-6 shadow rounded content">
              <h2 className="section-title">Create Event</h2>
              <br />
              <div className="columns is-multiline">
                <p>
                  User not verified, Please contact hello@generalist.dev for
                  verification
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderVerified = (
    <section class="section">
      <div className="container">
        <div className="columns is-desktop is-justify-content-center">
          <div className="column is-8-desktop">
            <div className="p-6 shadow rounded content">
              <h2 className="section-title">Create Event</h2>
              <br />
              <form method="POST" action="#">
                <div className="columns is-multiline">
                  <div className="form-group column is-12">
                    <label for="eventname">Event Name</label>
                    <input
                      type="text"
                      className="input"
                      id="eventname"
                      name="eventname"
                      placeholder="Event Name"
                      required
                    />
                  </div>
                  <div className="form-group column is-12">
                    <label for="description">Description</label>
                    <textarea
                      type="text"
                      className="input"
                      id="description"
                      name="description"
                      placeholder="Event Description"
                    />
                  </div>
                  <div className="form-group column is-12">
                    <label for="location">Location</label>
                    <input
                      type="text"
                      className="input"
                      id="location"
                      name="location"
                      placeholder="Location"
                      required
                    />
                  </div>
                  <div className="form-group column is-12">
                    <label for="eventdate">Date of Event</label>
                    <input
                      type="date"
                      className="input"
                      id="eventdate"
                      name="eventdate"
                      placeholder="mm/dd/yyyy"
                      required
                    />
                  </div>
                  <div className="form-group column is-12">
                    <label for="tickets_number">Total tickets</label>
                    <input
                      type="text"
                      className="input"
                      id="tickets_number"
                      name="tickets_number"
                      placeholder="Total tickets"
                      required
                    />
                  </div>
                  <div className="form-group column is-12">
                    <label for="price">Price of each ticket</label>
                    <input
                      type="text"
                      className="input"
                      id="price"
                      name="price"
                      placeholder="Price of each ticket"
                      required
                    />
                  </div>
                  <div className="form-group column is-12">
                    <label for="displayurl">Display Pic Url</label>
                    <input
                      type="text"
                      className="input"
                      id="displayurl"
                      name="displayurl"
                      placeholder="Display Pic Url"
                      required
                    />
                  </div>
                  <div className="column is-12">
                    <button type="submit" className="btn btn-primary">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  return (
    <div className="create-event-container">
      {isVerified ? renderVerified : renderNotVerified}
    </div>
  );
}

export default CreateEvent;
