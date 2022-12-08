import React from 'react';
import Contact from '../../pages/contact/contact';

import './navbar.scss';
import { Sling as Hamburger } from 'hamburger-react'

import Logo from './Logo';
// import { HashLink as Link } from 'react-router-hash-link';
import {  Link } from 'react-router-dom';

import cv from '../../images/CVDanielleGoldenberg.pdf';


export default function Navbar(props) {
	const [showContactModel, setShowContactModel] = React.useState(false);



	return (
		<>
			{showContactModel && <Contact bgcolor={props.bgcolor} txtcolor={props.txtcolor} showModal={showContactModel} handleClose={() => { setShowContactModel(false) }} />}
			<div id="navbar-menu" style={{ '--nav-scroll-color': props.bgcolor, '--txtcolor': props.txtcolor }} className={props.mobmenu ? "navbar-menu open" : "navbar-menu close"}  >
				<div className='nav-menu-logo'>
					<Logo color="white" bgcolor={props.bgcolor} txtcolor={props.txtcolor} />
				</div>
				<div className='mobile-menu d-md-none'>
					<Hamburger size={25} toggled={props.mobmenu} toggle={props.setMobmenu} color={props.txtcolor} label="menu"/>
				</div>
				<div className="nav-menu-rows d-none d-md-flex" >
					<div className='btn-arrow'  >
						<Link to='/' >
							<div className="navLink navLink-who"> Who <span className='link-span'>am i</span></div>
						</Link>
						<span className='arrow'><i className="fas fa-angle-right"></i></span>
					</div>

					<div className='btn-arrow'  >
						<Link to='/work'>
							<div className="navLink"> Work</div>
						</Link>
						<span className='arrow'>
							<i className="fas fa-angle-right"></i>
						</span>
					</div>

					<div className='btn-arrow'  >
						<a href={cv} target='_blank' rel="noopener noreferrer">
							<div className="navLink"> resume</div>
						</a>
						<span className='arrow'>
							<i className="fas fa-angle-right"></i>
						</span>
					</div>

				</div>

				<div className="nav-menu-rows d-none d-md-flex">

					<div className='btn-arrow' onClick={() => setShowContactModel(true)} >
						Contact
						<span className='arrow'>
							<i className="fas fa-angle-right"></i>
						</span>
					</div>
				</div>

				<div className={props.mobmenu ? "nav-menu-rows-mob d-md-none open" : "nav-menu-rows-mob d-md-none close"}>
					<div className="nav-menu-rows" >
							<Link className='btn-arrow' to='/' onClick={() => props.setMobmenu(false)}>
								<div className="navLink  navLink-who"> Who  <span className='link-span'>am i</span></div>
								<span className='arrow'>
								<i className="fas fa-angle-right"></i>
							</span>
							</Link>

							<Link className='btn-arrow' to='/work' onClick={() => props.setMobmenu(false)}>
								<div className="navLink"> Work</div>
								<span className='arrow'>
								<i className="fas fa-angle-right"></i>
							</span>
							</Link>
							

							<a className='btn-arrow' href={cv} target='_blank' rel="noopener noreferrer" onClick={() => props.setMobmenu(false)}>
								<div className="navLink"> resume</div>
								<span className='arrow'>
								<i className="fas fa-angle-right"></i>
							</span>
							</a>
							
					</div>

					<div className="nav-menu-rows">
						<div className='btn-arrow' onClick={() => { props.setMobmenu(false); setShowContactModel(true) }}>
							Contact
							<span className='arrow'>
								<i className="fas fa-angle-right"></i>
							</span>
						</div>
					</div>

					<div className='Social-icons Social-icons-menu'>
						<div className='social-icons-title w-100'> get in touch</div>
						<div className='social-icons-links'>
							<div className="link">
								<a className="icon-link" rel="noopener noreferrer" href="https://www.facebook.com/daniella.aharon.7/" aria-label="facebook" target="_blank"><i className="fab fa-facebook-f"></i> </a>
							</div>
							<div className="link">
								<a className="icon-link" rel="noopener noreferrer" href="https://www.linkedin.com/in/danielle-aharon-478b67199/" aria-label="linkedin" target="_blank"><i className="fab fa-linkedin-in"></i> </a>
							</div>
							<div className="link">
								<a className="icon-link" rel="noopener noreferrer" href="https://github.com/danielleaharon" aria-label="github" target="_blank"><i className='fab fa-github fa-lg' aria-hidden="true"></i> </a>
							</div>
						</div>
					</div>
				</div>
			</div>



		</>



	);

}
