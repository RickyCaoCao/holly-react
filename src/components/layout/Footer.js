import React from 'react';

import SocialLinks from './SocialLinks';
import NavLinks from './NavLinks';

export default function Footer() {
	return (
		<footer className="site-footer text-light">
			<div className="container">
				<div className="site-footer-inner">
					{/* TODO: Add Nav and Social Media links in the future. */}
					{/* <NavLinks className="footer-links" /> */}
					{/* <SocialLinks className="footer-social-links" /> */}
					<div className="footer-copyright">
						&copy; 2021 Project Loot. All rights reserved.
					</div>
				</div>
			</div>
		</footer>
	);
}
