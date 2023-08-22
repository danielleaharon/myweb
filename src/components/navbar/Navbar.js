import React from 'react';
import SocialIcons from '../Social-icons/Social-icons';
import './navbar.scss';
import { Sling as Hamburger } from 'hamburger-react'
import Logo from './Logo';
import cv from '../../images/CVDanielleGoldenberg.pdf';
import BtnArrow from '../btnArrow/btnArrow';


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
				<BtnArrow  text="Who" span={'am i'} href={'/'} target='_self'  />
				<BtnArrow  text="Work" href={'/work'} target='_self'  />
				<BtnArrow    text="Resume" href={cv} target='_blank'  />				
			</div>
			<div className="nav-menu-rows d-none d-md-flex">
			<BtnArrow href={'#'}  onClick={() => { props.setShowContactModel(true) }} text="Contact"/>
			</div>
			<div className={"nav-menu-rows-mob d-md-none " + (mobmenu ? 'open' : 'close')}>
				<div className="nav-menu-rows" >
					<BtnArrow  text="Who" span={'am i'} href={'/'} target='_self'  onClick={() => setMobmenu(false)} />
					<BtnArrow  text="Work" href={'/work'} target='_self'  onClick={() => { setMobmenu(false) }}/>
					<BtnArrow   text="Resume" href={cv} target='_blank'  />				
				</div>
				<div className="nav-menu-rows">
					<BtnArrow href={'#'}  onClick={() => { setMobmenu(false); props.setShowContactModel(true) }} text="Contact"/>
				</div>
				<div className='Social-icons Social-icons-menu'>
					<div className='social-icons-title w-100'> get in touch</div>
					<SocialIcons />
				</div>
			</div>
		</div>

	);

}
