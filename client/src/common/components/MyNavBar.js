import { Link } from "react-router-dom";
// import { TronWeb } from "tronweb";
import logo from "../../assets/images/logo.png";
import { getTronWeb } from "../../plugins/utils";

// const tronWeb = new TronWeb({
//   fullHost: server,
//   solidityNode: server,
//   eventServer: server,
//   privateKey: ""
// });

function MyNavBar() {
  return (
    <nav
      className="navbar is-sticky-top navigation"
      role="navigation"
      aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to={"/"}>
            <img
              className="img-fluid"
              src={logo}
              alt="just tickets"
              width="200px"
            />
          </Link>

          <Link
            role="button"
            className="navbar-burger burger"
            aria-expanded="false"
            data-target="navbar-links">
            <Link className="navbar-item" to={"/events"}>
              Happenings
            </Link>
            <Link className="navbar-item" to={"/tickets"}>
              My Tickets
            </Link>
            <Link className="navbar-item" to={"/governance"}>
              Governance
            </Link>
            <Link className="navbar-item" to={"/createevents"}>
              Create Events
            </Link>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
        </div>

        <div id="navbar-links" className="navbar-menu">
          <div className="navbar-start ml-auto">
            <Link className="navbar-item" to={"/events"}>
              Happenings
            </Link>
            <Link className="navbar-item" to={"/tickets"}>
              My Tickets
            </Link>
            <Link className="navbar-item" to={"/governance"}>
              Governance
            </Link>
            <Link className="navbar-item" to={"/createevents"}>
              Create Events
            </Link>
          </div>

          <div className="navbar-end ml-0">
            <div className="navbar-item py-0">
              <Link
                onClick={getTronWeb}
                className="btn btn-sm btn-primary ml-4">
                Connect Wallet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MyNavBar;
