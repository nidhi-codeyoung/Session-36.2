import { Link } from "react-router-dom";
import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.


const Home = () => {
return (
	<div>
	<h1>Home Page</h1>
    <center> <p>This is the Main page: Home Page</p></center>
   
	<br />
    <center>
	<ul type="none">
		<li>
		{/* Endpoint to route to Home component */}
		<Link to="/">Home</Link>
		</li>
		<li>
		{/* Endpoint to route to About component */}
		<Link to="/about">About</Link>
		</li>
		<li>
		{/* Endpoint to route to Contact Us component */}
		<Link to="/contactus">Contact Us</Link>
		</li>
	</ul>
    </center>
	</div>
);
};

export default Home;