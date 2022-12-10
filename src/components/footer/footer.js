import React from 'react';
import './footer.scss';
import Bye from '../../images/me-contact.webp';
import SocialIcons from '../Social-icons/Social-icons';
import BtnArrow from '../btnArrow/btnArrow';
import LetterJump from '../letterJump/letterJump';

export default function Footer(props) {

    return (
        <div className={'footer area ' + props.state}>
            <div className='col-auto d-flex justify-content-end '>
                <div className='footer-img'>
                    <img className='d-none d-md-block' width={350} height={345} src={Bye} alt="me-contact" />
                    <img className='d-md-none' width={150} height={148} src={Bye} alt="me-contact" />
                </div>
            </div>
            <div className='col-auto footer-contect'>
                <div className='footer-title'>
                    <LetterJump textarr={['T', 'h', 'a', 'n', 'k', ' ', 'Y', 'o', 'u']} />
                </div>

                <div className='footer-content-row-2'>
                    <div className="footer-rows d-inline-block ">
                        <BtnArrow onClick={() => props.setShowContactModel(true)} text={'Contact Me'} herf="#" target={'_self'}/>
                    </div>
                    <div className='Social-icons Social-icons-footer ' >
                        <SocialIcons />
                    </div>
                </div>
            </div>
        </div>


    );

}
