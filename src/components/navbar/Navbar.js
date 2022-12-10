import React from 'react';
import { sendDataClick } from '../email/email';
import SocialIcons from '../Social-icons/Social-icons';
import './navbar.scss';
import { Sling as Hamburger } from 'hamburger-react'

import Logo from './Logo';
// import { HashLink as Link } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import cv from '../../images/CVDanielleGoldenberg.pdf';


export default function Navbar(props) {
	const [mobmenu, setMobmenu] = React.useState(false);

	React.useEffect(() => {
		if (!mobmenu)
			document.getElementById("navbar-menu").classList.add('nav-scroll')

	}, [mobmenu]);


	return (

		<div id="navbar-menu" className={"navbar-menu section area " + props.state + ' ' + (mobmenu ? 'open' : 'close')} >
			<div className='nav-menu-logo'>
				<Logo />
			</div>
			<div className='mobile-menu d-md-none'>
				<Hamburger size={25} toggled={mobmenu} toggle={setMobmenu} color={'var(--txt)'} label="menu" />
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

				<div className='btn-arrow' onClick={() => sendDataClick('Resume')} >
					<a href={cv} target='_blank' rel="noopener noreferrer">
						<div className="navLink"> resume</div>
					</a>
					<span className='arrow'>
						<i className="fas fa-angle-right"></i>
					</span>
				</div>

			</div>

			<div className="nav-menu-rows d-none d-md-flex">

				<div className='btn-arrow' onClick={() => props.setShowContactModel(true)} >
					Contact
					<span className='arrow'>
						<i className="fas fa-angle-right"></i>
					</span>
				</div>
			</div>

			<div className={"nav-menu-rows-mob d-md-none " + (mobmenu ? 'open' : 'close')}>
				<div className="nav-menu-rows" >
					<Link className='btn-arrow' to='/' onClick={() => setMobmenu(false)}>
						<div className="navLink  navLink-who"> Who  <span className='link-span'>am i</span></div>
						<span className='arrow'>
							<i className="fas fa-angle-right"></i>
						</span>
					</Link>

					<Link className='btn-arrow' to='/work' onClick={() => {  setMobmenu(false) }}>
						<div className="navLink"> Work</div>
						<span className='arrow'>
							<i className="fas fa-angle-right"></i>
						</span>
					</Link>


					<a className='btn-arrow' href={cv} target='_blank' rel="noopener noreferrer" onClick={() => { sendDataClick('Resume'); setMobmenu(false) }}>
						<div className="navLink"> resume</div>
						<span className='arrow'>
							<i className="fas fa-angle-right"></i>
						</span>
					</a>

				</div>

				<div className="nav-menu-rows">
					<div className='btn-arrow' onClick={() => { setMobmenu(false); props.setShowContactModel(true) }}>
						Contact
						<span className='arrow'>
							<i className="fas fa-angle-right"></i>
						</span>
					</div>
				</div>

				<div className='Social-icons Social-icons-menu'>
					<div className='social-icons-title w-100'> get in touch</div>
					<SocialIcons />
				</div>
			</div>
		</div>

	);

}
