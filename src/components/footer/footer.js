import React from 'react';
import './footer.scss';
import Bye from '../../images/me-contact.webp';
import SocialIcons from '../Social-icons/Social-icons';



export default function Footer(props) {


    return (

            <div className={'footer area '+props.state}>
                <div className='col-auto d-flex justify-content-end '>
                    <div className='footer-img'>
                        <img className='d-none d-md-block' width={350} height={345} src={Bye} alt="me-contact" />
                        <img className='d-md-none' width={150} height={148} src={Bye} alt="me-contact" />

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
                            <div className='btn-arrow' onClick={() => props.setShowContactModel(true)} >
                                Contact Me

                                <span className='arrow'>
                                    <i className="fas fa-angle-right"></i>
                                </span>
                            </div>
                        </div>
                        <div className='Social-icons Social-icons-footer ' >

                         <SocialIcons/>
                        </div>
                    </div>
                </div>
            </div>

     
    );

}
