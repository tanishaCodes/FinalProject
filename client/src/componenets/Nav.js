import React from "react";
import { Link } from "react-router-dom";

function Nav() {
	return (

		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<Link className="navbar-item" to="/home">
					<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo"/>
   				</Link>
					<div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</div>
 			 </div>

				<div id="navbarBasicExample" class="navbar-menu">
					<div className="navbar-start">
						<div className="navbar-item">
							<Link to="/home" className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
							> Calendar</Link>
    					</div>
						<div className="navbar-item">
							<Link to="/about" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
							> About</Link>
    					</div>
					</div>

						<div className="navbar-end">
							<div className="navbar-item">
								<div className="buttons">
									<div className="button is-light">
									<Link to="/donor" className={window.location.pathname === "/donor" ? "nav-link active" : "nav-link"}
									>Donor </Link>
         							</div>
								</div>
							</div>
						</div>
					</div>
		</nav>

	);
}

export default Nav;