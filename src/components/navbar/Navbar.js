import React, { Component } from 'react';
//import 'materialize-css/dist/css/materialize.min.css';
import { HashLink as Link } from 'react-router-hash-link';
import gmail from '../../images/gmailwhite48.png';
import gmailred from '../../images/gmailcolor48.png';



export default class Navbar extends Component {


	render() {
		return (
			<>
				<div className="brand-logo">
					<Link to='/' className='brand-logo'>
						<h4 className="H4" >Danielle Aharon</h4>
					</Link>
					<h6>Full stack developer</h6>
					<br></br>

					<h5>Looking for full time job</h5>

					<br></br>

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
				</div>
				<nav className='light-blue-danielle '>
					<div className='container'>
						<div className='nav-wrapper'>


							{/* <Link  to='/' className='brand-logo'>
							<h4 className="H4" >Danielle Aharon</h4>
							</Link> */}
							{/* <Link to='/' data-target='side-nav' className='sidenav-trigger'>
								<i className='material-icons'>menu</i>
							</Link> */}
							<ul className='rightbar' >
								<li>
									<Link to='#about'>
										{/* <i id="navIcon" class='fas fa-address-card'></i>  */}
										<il id="navText">About</il>
									</Link>
								</li>
								{/* <li >
									<Link to='#home'>
										<i id="navText" class='fas fa-home'></i> <il id="navText">Home</il>
									</Link>
								</li> */}

								<li >
									<Link to='#experiences'>
										{/* <i id="navText" class='fas fa-id-badge'></i> */}
										<il id="navText"> My Project</il>
									</Link>
								</li>
								<li>
									<Link to='#skills'>
										{/* <i id="navText" class='fas fa-copy'></i>  */}
										<il id="navText">Skills</il>
									</Link>
								</li>


							</ul>
						</div>

					</div>
				</nav>

{/* 
				<ul className='sidenav' id='side-nav'>
					<li>
						<Link to='/'>
							<i class='fas fa-home'></i> Home
						</Link>
					</li>
					<li>
						<Link to='/skills'>
							<i class='fas fa-copy'></i> Skills
						</Link>
					</li>
					<li>
						<Link to='/experiences'>
							<i class='fas fa-id-badge'></i> Experiences
						</Link>
					</li>
					<li>
						<Link to='/educations'>
							<i class='fas fa-graduation-cap'></i> Educations
						</Link>
					</li>
					<li>
						<Link to='/portfolios'>
							<i class='fas fa-address-card'></i> Portfolios
						</Link>
					</li>
				</ul> */}
			</>
		);
	}
}
