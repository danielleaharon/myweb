import React, { Component } from 'react';
//import 'materialize-css/dist/css/materialize.min.css';
import { HashLink as Link } from 'react-router-hash-link';

export default class Navbar extends Component {

// 	<a className="smoothscroll" href="#home">
// 	Home
//   </a>
// </li>

// <li>
//   <a className="smoothscroll" href="#about">
// 	About
//   </a>
// </li>

// <li>
//   <a className="smoothscroll" href="#resume">
// 	Resume
//   </a>
// </li>

// <li>
//   <a className="smoothscroll" href="#portfolio">
// 	Works
//   </a>
// </li>

// <li>
//   <a className="smoothscroll" href="#contact">
// 	Contact
//   </a>
// </li>
// </ul>
// </nav>

	render() {
		return (
			<>
				<nav className='light-blue-danielle '>
					<div className='container'>
						<div className='nav-wrapper'>
						

							<Link  to='/' className='brand-logo'>
							<h4 className="H4">Danielle Aharon</h4>
							</Link>
							{/* <Link to='/' data-target='side-nav' className='sidenav-trigger'>
								<i className='material-icons'>menu</i>
							</Link> */}
							<ul  className='rightbar' >
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
				</ul>
			</>
		);
	}
}
