import React from 'react';
import './intro.scss';
import Navbar from '../../components/navbar/Navbar';
import DialogProject from '../../components/memoryGame/DialogProject';
import About from '../../components/about/About';
import Footer from '../../components/footer/footer';
import Work from '../../components/work/work';
import InroHero from '../../components/intro-hero/intro-hero';


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
export default function Hero(props) {
	const [showModalProject, setShowModalProject] = React.useState(false);
	const [modalProjectContent, setModalProjectContent] = React.useState(uniqueElementsArray[0].content);


	React.useEffect(() => {
		const doc = document.getElementById("scroll-container-intro");
		doc.style.setProperty('--scroll-height', `${doc.scrollHeight}px`)

		document.getElementById("scroll-container-intro").addEventListener('scroll', scrollhandelr, { passive: false });

		return (e) => {
			document.getElementById("scroll-container-intro").removeEventListener('scroll', scrollhandelr, { passive: false });

		};
	}, []);
	const scrollhandelr = () => {
		var top = document.getElementById("scroll-container-intro").scrollTop;
		var vh = document.documentElement.clientHeight
		if (document.querySelector('.active'))
			document.querySelector('.active').classList.remove('active')

		if (top >= 0 && top <= 50) {
			document.getElementById("navbar-menu").classList.remove('nav-scroll')

		} else if (!document.getElementById("navbar-menu").classList.contains('nav-scroll')) {
			document.getElementById("navbar-menu").classList.add('nav-scroll')

		}

		if (top >= 0 && top < vh) {

			document.getElementById('intro-contact').classList.add('active')


		}
		else if (top >= vh && top < 2 * (vh)) {

			document.getElementById('intro-about-section').classList.add('active')

		}

		else if (top >= 2 * (vh) && top < 3 * (vh)) {

			document.getElementById('intro-work-section').classList.add('active')


		}
	}


	return (


		<div id="scroll-container-intro" className="section intro scroll-container">
			<DialogProject showModal={showModalProject} handleClose={() => { setShowModalProject(false) }} content={modalProjectContent} />

			<div id="intro-contact" className='area'>
				<Navbar bgcolor="#04403D" txtcolor="rgb(238, 238, 238)" {...props} />
				<InroHero {...props} />
			</div>
			<About />
			<Work setModalProjectContent={setModalProjectContent} setShowModalProject={setShowModalProject} />
			<Footer bgcolor="#04403D" txtcolor="rgb(238, 238, 238)" />
		</div>

	);

}
