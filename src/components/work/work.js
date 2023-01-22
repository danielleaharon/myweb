import React from 'react';
import './work.scss';
import Opium from '../../images/work/opium.svg';
import Looper from '../../images/work/soundlooper.svg';
import BtnArrow from '../btnArrow/btnArrow';


const uniqueElementsArray = [
	{
		type: "opium",
		image: require(`../../images/work/opium.svg`),
		content: {
			title: "Opuim Store",
			lang: 'React&Wordpress',
			description: `An online platform for custom product printing, allowing users to design and order their products. The website was built using WordPress and React as part of a college "user experience" project, where the team analyzed and proposed improvements to the store's previous website. I implemented these changes after the project's completion.`,
			github: "https://github.com/danielleaharon/androidproject",
			image: require(`../../images/work/opium.svg`),
			demoweb: 'https://www.opiumstore.online/'
		}
	},

	{
		type: "looper",
		image: require(`../../images/work/soundlooper.svg`),
		content: {
			title: "Sound Looper",
			lang: 'React',
			description: `A website that allows users to play and layer up to nine different loops simultaneously. Each loop cycle is 8 seconds, and users can add additional loops during each round. The site also features a recording function, enabling users to save and replay their loops`,
			github: "https://github.com/danielleaharon/soundLooper",
			image: require(`../../images/work/soundlooper.svg`),
			demoweb: 'https://soundlooper.herokuapp.com/'
		}
	}

];
export default function Work({ setModalProjectContent, setShowModalProject }) {

	return (
		<div id="intro-work-section" className='intro-work-section area'>
			<BtnArrow text={'view all work'} href={'/work'} target='_self' className="d-md-none d-inline-block" />

			<div className='work-card Opium' style={{ '--bg': 'url(' + Opium + ')' }}>
				<div className="top card-slice">
				</div>
				<div className="bottom card-slice">
				</div>
				<div className='content-hover'>
					<div className='name'>
						<span> Online product printing shop </span></div>
					<BtnArrow href={'#'} text={'view project'} onClick={() => { setModalProjectContent(uniqueElementsArray[0].content); setShowModalProject(true); }} />
				</div>
			</div>
			<div className='intro-work'>
				<div className='title'> Recent Work </div>
				<BtnArrow text={'view all work'} href={'/work'} target='_self' className="d-none d-md-inline-block" />
			</div>
			<div className='work-card Looper' style={{ '--bg': 'url(' + Looper + ')' }}>
				<div className="top card-slice">
				</div>
				<div className="bottom card-slice">
				</div>
				<div className='content-hover'>
					<div className='name'>
						<span>A site that offers to play up to 9 different loops together. </span>
					</div>
					<BtnArrow href={'#'} text='view project'  onClick={() => { setModalProjectContent(uniqueElementsArray[1].content); setShowModalProject(true); }} />
				</div>
			</div>
		</div>
	);
}
