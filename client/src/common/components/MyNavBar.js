import logo from "../../assets/images/logo.png";

function MyNavBar(){
    return (
        <nav className="navbar is-sticky-top navigation" role="navigation" aria-label="main navigation">
   <div className="container">
      <div className="navbar-brand">
         <a  href="index.html">
            <img className="img-fluid" src={logo} alt="just tickets" width="200px" />
         </a>
         <a role="button" className="navbar-burger burger" aria-expanded="false" data-target="navbar-links">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
         </a>
      </div>
   
      <div id="navbar-links" className="navbar-menu">
         <div className="navbar-start ml-auto">
            <a className="navbar-item" href="index.html">Happenings</a>
            <a className="navbar-item" href="list.html">My Tickets</a>
            <a className="navbar-item" href="search.html">Create Event</a>
         </div>
   
         <div className="navbar-end ml-0">
            <div className="navbar-item py-0">
               <a href="changelog.html" className="btn btn-sm btn-outline-primary ml-4">changelog</a>
               <a href="contact.html" className="btn btn-sm btn-primary ml-4">contact</a>
            </div>
         </div>
      </div>
   </div>
</nav>

    );
}

export default MyNavBar;