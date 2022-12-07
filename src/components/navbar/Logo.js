import React from 'react';
import './logo.scss';

export default function Logo(props) {
	return (
		<a href='/' className='logo' style={{ '--bgcolor': props.bgcolor, '--txtcolor': props.txtcolor }}>
			<span className='logo-title'>DG</span>
			<span className='logo-description'>Web Developer</span>
		</a>

	);

}
