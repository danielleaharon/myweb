import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import gmail from '../../../images/gmailgreen48.png';
import gmailred from '../../../images/gmailcolor48.png';

export default function Profile() {
	return (
		<div id="Profile" className="marginPageProfile">
		
			<div className="navIcon" id='navfooter'>
						<p className='flex-container'>
							<a className="iconFace" href="https://www.facebook.com/daniella.aharon.7/" target="_blank"><i className='fab fa-facebook fa-lg'></i></a>
							<a className="iconLink" href="https://www.linkedin.com/in/danielle-aharon-478b67199/" target="_blank"><i className='fab fa-linkedin fa-lg'></i></a>
							<div class="gitcard">
								<i className='fab fa-github fa-lg' aria-hidden="true"></i>
								<a className="img-top" href="https://github.com/danielleaharon" target="_blank"><i className='fab fa-github fa-lg' aria-hidden="true"></i></a>


							</div>
							<div class="gmailcard">
								<img src={gmail} alt="Card Back"></img>
								<a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ah.danielle22@gmail.com" target="_blank">  <img src={gmailred} class="img-top" alt="Card Front"></img></a>

							</div>


						</p>
					</div>
	
		</div>
	);
}
