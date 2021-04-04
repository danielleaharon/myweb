import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ImgProfile from '../../../images/myimage.png';
import gmail from '../../../images/gmailwhite48.png';
import gmailred from '../../../images/gmailcolor48.png';
import github from '../../../images/github.png';
import githubblack from '../../../images/githubblack.png';

export default function Profile() {
	return (
		<div id="Profile" className="marginPageProfile">
			{/* <div className='card' >
				<div className='card-image'>
					<img className='activator' src={ImgProfile} alt='Danielle Aharon' />
					<Link className='btn-floating halfway-fab waves-effect waves-light red'>
						<i className='material-icons activator'>more_vert</i>
					</Link>
				</div>
				<div className='card-content'>
					<span className='card-title activator grey-text text-darken-4'>
					Full Stack Developer
					</span>
					<p>Full Stack Developer</p>
				
				</div>
			
				<div className='card-reveal'>
					<span className='card-title grey-text text-darken-4'>
						Follow Me
						<i className='material-icons right'>close</i>
					</span>
					<p className='flex-container'>
						<i className='fab fa-facebook-f grey-text text-darken-4 social_style'></i>
						<i className='fab fa-twitter grey-text text-darken-4 social_style'></i>
						<i className='fab fa-google-plus-g grey-text text-darken-4 social_style'></i>
						<i className='fab fa-instagram grey-text text-darken-4 social_style'></i>
						<i className='fab fa-pinterest grey-text text-darken-4 social_style'></i>
					</p>
				</div>
			</div> */}
			{/* <div className="marginPageProfile"> */}
			<div className="navIcon">
						<p className='flex-container'>
							<a className="iconFace" href="https://www.facebook.com/daniella.aharon.7/" target="_blank"><i className='fab fa-facebook fa-lg'></i></a>
							<a className="iconLink" href="https://www.linkedin.com/in/danielle-aharon-478b67199/" target="_blank"><i className='fab fa-linkedin fa-lg'></i></a>
							<div class="gitcard">
								<i className='fab fa-github fa-lg' aria-hidden="true"></i>
								<a className="img-top" href="https://github.com/danielleaharon" target="_blank"><i className='fab fa-github fa-lg' aria-hidden="true"></i></a>

								{/* <a href="https://github.com/danielleaharon" target="_blank">  <img src={githubblack} class="img-top" alt="Card Front"></img></a> */}

							</div>
							{/* <a className="gmail-logo" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ah.danielle22@gmail.com" target="_blank"><i class="gmail" aria-hidden="true"></i></a> */}
							<div class="gmailcard">
								<img src={gmail} alt="Card Back"></img>
								<a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ah.danielle22@gmail.com" target="_blank">  <img src={gmailred} class="img-top" alt="Card Front"></img></a>

							</div>
							{/* <a className="gmailimg" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ah.danielle22@gmail.com" target="_blank"><img src={gmailred} ></img></a> */}


						</p>
					</div>
			{/* <div className='card'>
			<div className='card-content'>
					<span className='card-title grey-text text-darken-4'>
						Follow Me
					</span>
				<p className='flex-container'>
				<a className="iconFace" href="https://www.facebook.com/daniella.aharon.7/" target="_blank"><i className='fab fa-facebook fa-lg'></i></a>
						<a className="iconLink" href="https://www.linkedin.com/in/danielle-aharon-478b67199/"target="_blank"><i className='fab fa-linkedin fa-lg'></i></a>
						<div class="gitcard">
					<i  className='fab fa-github fa-lg' aria-hidden="true"></i>
						<a  className="img-top" href="https://github.com/danielleaharon" target="_blank"><i  className='fab fa-github fa-lg' aria-hidden="true"></i></a>

                        <a href="https://github.com/danielleaharon" target="_blank">  <img src={githubblack} class="img-top" alt="Card Front"></img></a>
					
                       </div>
						<a className="gmail-logo" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ah.danielle22@gmail.com" target="_blank"><i class="gmail" aria-hidden="true"></i></a>
						<div class="gmailcard">
						<img  src={gmail} alt="Card Back"></img>
                        <a  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ah.danielle22@gmail.com" target="_blank">  <img src={gmailred} class="img-top" alt="Card Front"></img></a>
					
                       </div>
						<a className="gmailimg" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ah.danielle22@gmail.com" target="_blank"><img src={gmailred} ></img></a>

		
					</p>
				</div>
				</div> */}

			{/* </div> */}
		</div>
	);
}
