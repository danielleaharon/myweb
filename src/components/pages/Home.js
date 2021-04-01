import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Navbar2 from '../../components/navbar/Navbar copy';
import Profile from '../../components/pages/profile/Profile';
import About from '../../components/pages/about/About';
import About2 from '../../components/pages/about/About copy';

import Skills from '../../components/pages/skills/Skills';
import Experiences from '../../components/pages/experiences/Experiences';
import Educations from '../../components/pages/educations/Educations';
import Portfolios from '../../components/pages/portfolios/Portfolios';


export default class Home extends Component {
	
	render() {
		return (
			<section id="home">
			
				<Navbar />
				
			
				<div className='container'>
					<div className='row'>
				
						<div className='col s12 m3'>
							<Profile />
						</div>
						<div className='col s12 m9'>

							<div className="try1">
						{/* <About2 /> */}
						<About />
						</div>
						<div className="try1">
						<Experiences />
						</div>
						<div className="try1">
							<Skills />
							</div>
						</div>
						</div>

						</div>
				
					
			
			</section>

		);
	}
}
