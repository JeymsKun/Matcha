import React from 'react';
import '../css/MATCHA STYLE.css';
import { Link } from 'react-router-dom';

function Header () {
    return (
        <header>
			<row>
				<nav>	
					<ul className="main-menu">
						<li><Link to="/home">HOME</Link></li>
						<li><Link to="/aboutus">ABOUT US</Link></li>
						<li><Link to="/contact">CONTACT</Link></li>
					</ul>
				</nav>
			</row>
		</header>
    )
}

export default Header
