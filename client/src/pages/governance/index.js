function Governance() {
  return (
    <div className="home-page-container">
      <div className="container">
        {/* title page */}
        <section className="section pb-0">
          <div className="columns is-justify-content-space-between ">
            <div className="column is-6-desktop is-flex-tablet">
              <img
                src="https://qph.cf2.quoracdn.net/main-qimg-055f3d3c36b84a091a05fabaff902bd4-lq"
                alt="illustration"
                className="img-fluid"
              />
            </div>
            <div class="card column is-6-desktop">
              <div>
                <h3 class="card-header-title">Ticket Tron DAO</h3>
                <p class="subtitle is-6 pl-4">More than a ticketing platform</p>
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

                <input
                  type="text"
                  className="input mb-20"
                  id="description"
                  name="description"
                  placeholder="Proposal"
                />
                <br />

                <button className="button btn mt-10 is-fullwidth btn-sm btn-primary stretched-link">
                  Create a Proposal
                </button>

                <hr />
                <button className="button btn  is-fullwidth btn-sm btn-primary stretched-link">
                  Get Verified
                </button>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Governance;
