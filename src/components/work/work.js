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
			description: `Online product printing shop,
        The site offers a platform for designing visualization of products and sending the order to the store.
        The site was built with wordpress handles and with react.
        As part of a "user experience" project at the college, we took the store's old website and wrote a detailed description of how to improve it. After school I decided to implement the changes.`,
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
			description: `Sound looper,
        A site that offers to play up to 9 different loops together.
        The legality: each round of a loop is 8 seconds, you can add to the next round as many loops as you want (once the round has started the loop will be added to the next loop)
        You can also record the loop and play it again.`,
			github: "https://github.com/danielleaharon/soundLooper",
			image: require(`../../images/work/soundlooper.svg`),
			demoweb: 'https://soundlooper.herokuapp.com/'
		}
	}

];
export default function Work({ setModalProjectContent, setShowModalProject }) {

	return (
		<div id="intro-work-section" className='intro-work-section area'>
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
				<BtnArrow text={'view all work'} href={'/work'} target='_self' />
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
