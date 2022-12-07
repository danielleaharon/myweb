import React from 'react';
import Contact from '../../pages/contact/contact';

import './footer.scss';
import Bye from '../../images/me-contact.webp';




export default function Navbar(props) {

    const [showContactModel, setShowContactModel] = React.useState(false);

    return (
        <>
            {showContactModel && <Contact bgcolor={props.bgcolor} txtcolor={props.txtcolor} showModal={showContactModel} handleClose={() => { setShowContactModel(false) }} />}


            <div className='footer area  '>
                <div className='col-auto d-flex justify-content-end '>
                    <div className='footer-img'>
                        <img width={350} height={345} src={Bye} alt="me-contact" />
                    </div>
                </div>
                <div className='col-auto footer-contect'>
                    <div className='footer-title'>
                        {['T', 'h', 'a', 'n', 'k', ' ', 'Y', 'o', 'u'].map((item, index) => {
                            if (item === " ")
                                return <span key={index} className=''> </span>
                            if (item === "br")
                                return <br key={index}></br>
                            return <span key={index} className=" jump" >	{item}</span>

                        })}
                    </div>

                    <div className='footer-content-row-2'>

                        <div className="footer-rows d-inline-block ">
                            <div className='btn-arrow' onClick={() => setShowContactModel(true)} >
                                Contact Me

                                <span className='arrow'>
                                    <i className="fas fa-angle-right"></i>
                                </span>
                            </div>
                        </div>
                        <div className='Social-icons Social-icons-footer ' >

                            <div className="link">
                                <a className="icon-link" rel="noopener noreferrer" href="https://www.facebook.com/daniella.aharon.7/" aria-label="facebook" target="_blank"><i className="fab fa-facebook-f"></i> </a>

                            </div>
                            <div className="link">
                                <a className="icon-link" rel="noopener noreferrer" href="https://www.linkedin.com/in/danielle-aharon-478b67199/" aria-label="linkedin" target="_blank"><i className="fab fa-linkedin-in"></i> </a>
                            </div>
                            <div className="link">				<a className="icon-link" rel="noopener noreferrer" href="https://github.com/danielleaharon" aria-label="github" target="_blank"><i className='fab fa-github fa-lg' aria-hidden="true"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

}