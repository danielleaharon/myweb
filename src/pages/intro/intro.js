import React from 'react';
import './intro.scss';
import DialogProject from '../../components/memoryGame/DialogProject';
import About from '../../components/about/About';
import Work from '../../components/work/work';
import InroHero from '../../components/intro-hero/intro-hero';



export default function Hero(props) {
	const [showModalProject, setShowModalProject] = React.useState(false);
	const [modalProjectContent, setModalProjectContent] = React.useState('');


	React.useEffect(() => {
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

<>
           {showModalProject && <DialogProject showModal={showModalProject} handleClose={() => { setShowModalProject(false) }} content={modalProjectContent} />}
		<div className="section intro">
			<InroHero {...props} />
			<About />
			<Work setModalProjectContent={setModalProjectContent} setShowModalProject={setShowModalProject} />
		</div>
		</>
	);

}
