import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Profile from '../../components/pages/profile/Profile';
import About from '../../components/pages/about/About';

import Skills from '../../components/pages/skills/Skills';
import Experiences from '../../components/pages/experiences/Experiences';
import Educations from '../../components/pages/educations/Educations';
import Portfolios from '../../components/pages/portfolios/Portfolios';
import Gallary from '../../components/pages/Gallary';


export default class Home extends Component {
	
	render() {
		return (
			<section id="home">
									
				<Navbar />
				
			
				<div className='container'>
					<div className='myrow'>
				
			
						<div className='col s12 m3'>

							<div className="try1">
						
						<About />
						</div>
						<div className="try1">
						<Experiences />
						</div>
						<div className="try1">
							<Skills />
							</div>
							<div className="try1">
							<Gallary />
							</div>
						</div>
						<div className='col s12 m1'>
							<Profile />
						</div>
						
						</div>

						</div>
				
					
			
			</section>

		);
	}
}
