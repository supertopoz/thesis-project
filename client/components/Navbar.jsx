import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search.jsx';

const NavBar = (props) => (
	<div>
  <nav>
		<div className="brand">
  		<Link to="/">
	  	{/*<span className="desktop-show">Budget Basket</span>*/}
	  	<i className="fa fa-shopping-basket"></i>
	  	</Link>
		</div>
	  <div className="menu">
	    <li>
	    		<Link to="/">
	        <span className="mobile-show col">
		        <i className="fa fa-home" aria-hidden="true"></i>
		        Home
	        </span>
	        </Link>
	    </li>
			<li>
					<Link to="/developer">
						<span className="desktop-show">DEVELOPER</span>
						<span className="mobile-show col">
							<i className="fa fa-book" aria-hidden="true"></i>DEVELOPER
						</span>
					</Link>
			</li>
	    {/* <li>
	    		<Link to="/about">
		        <span className="desktop-show">About</span>
		        <span className="mobile-show col">
		     	<i className="fa fa-bookmark" aria-hidden="true"></i>About
		     		</span>
	        </Link>
	    </li> */}
	    <li>
	        <Link to="/shoppingList">
		        <span className="desktop-show">WATCH LIST</span>
		        <span className="mobile-show col">
				    	<i className="fa fa-bookmark" aria-hidden="true"></i>WATCH LIST
		        </span>
	        </Link>
	    </li>
	    <li>
	      <Link to="/login" onClick={props.logging}>
	        <span className="desktop-show">{props.logged}</span>
	        <span className="mobile-show col">
	        <i className="fa fa-sign-out" aria-hidden="true"></i>{props.logged}</span>
	      </Link>
	    </li>
	  </div>
	</nav>
</div>);

export default NavBar;