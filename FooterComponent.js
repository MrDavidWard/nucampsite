import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
	return (
		<footer className="site-footer">
			<div className="container">
				<div className="row">
					<div className="col-4 col-sm-2 offset-1">
						<h5>Links</h5>
						<ul className="list-unstyled">
							<li>
								<Link to="/home">Home</Link>
							</li>
							<li>
								<Link to="/directory">Directory</Link>
							</li>
							<li>
								<Link to="/aboutus">About</Link>
							</li>
							<li>
								<Link to="/contactus">Contact</Link>
							</li>
						</ul>
					</div>
					<div className="col-6 col-sm-3 text-center">
						<h5>Social</h5>
						<Link className="btn btn-social-icon btn-instagram mr-1" href="http://instagram.com/">
							<i className="fa fa-instagram" />
						</Link>
						<Link className="btn btn-social-icon btn-facebook mr-1" href="http://www.facebook.com/">
							<i className="fa fa-facebook" />
						</Link>
						<Link className="btn btn-social-icon btn-twitter mr-1" href="http://twitter.com/">
							<i className="fa fa-twitter" />
						</Link>
						<Link className="btn btn-social-icon btn-google" href="http://youtube.com/">
							<i className="fa fa-youtube" />
						</Link>
					</div>

					<div className="col-sm-4 text-center">
						<Link role="button" className="btn btn-link" href="tel:+12065551234">
							<i className="fa fa-phone" /> 1-206-555-1234
						</Link>
						<br />
						<Link role="button" className="btn btn-link" href="mailto:notreal@notreal.co">
							<i className="fa fa-envelope-o" /> campsites@nucamp.co
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
