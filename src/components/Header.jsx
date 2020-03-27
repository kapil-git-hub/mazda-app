import React from 'react';
import logo from '../assets/images/mazda-logo.png';

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<img src={logo} alt="Mazda logo" />
				<div className="navigation-global-menu-list1">
					<ul>
						<li>
							<a href="https://www.mazdausa.com:443/certified-pre-owned" className="navigation-global-supp-menu-link" >Certified Pre-Owned</a>
						</li>
						<li>
							<a href="https://www.mazdausa.com:443/find-a-dealer" className="navigation-global-supp-menu-link">Find a Dealer</a>
						</li>
						<li>
							<a href="#" title="Your Location" className="navigation-zipcode-link" >
								<span className="">96719</span>
								<span className="map-icon-zip-code-img"></span>
							</a>
						</li>
					</ul>
				</div>
				<div className="navigation-global-menu-list2">
					<ul>
						<li>
							<a href="#" target="_self" title="Vehicles" className="navigation-global__menu-link-1" >Vehicles</a>
						</li>
						<li>
							<a href="#" target="_self" title="Shopping Tools" className="navigation-global__menu-link-2" >Shopping Tools</a>
						</li>
						<li>
							<a href="#" target="_self" title="Why Mazda" className="navigation-global__menu-link-3" >Why Mazda</a>
						</li>
						<li>
							<a href="#" target="_self" title="Owners" className="navigation-global__menu-link-4" >Owners</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}

}
export default Header;