import React from 'react';
import './contact.scss';
import MeCool from '../../images/me-cool.png';
import SocialIcons from '../../components/Social-icons/Social-icons';
import {
  Dialog,
  DialogActions,
  DialogContent,
} from "@material-ui/core";

export default function Contact({ showModal, handleClose , state}) {

  return <Dialog
    open={showModal}
    fullWidth
    disableEscapeKeyDown
    aria-labelledby="dialog-title"
    aria-describedby="dialog-description"
    id="dialog-contact"
    maxWidth='xl'
    className={state}>
    <div className='dialog-contact-page'>
      <div id="dialog-content-title">
      </div>
      <DialogContent>
        <div id="dialog-description">
          <div>Contact me</div>
          <div>
            <a href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ah.danielle22@gmail.com' target='_blank' rel="noopener noreferrer">       ah.danielle@gmail.com</a>
          </div>
          <div className='contact-img'><img src={MeCool} alt="me-cool" /></div>
        </div>
        <div className='Social-icons Social-icons-contact'>
          <div className='social-icons-title w-100'> get in touch</div>
         <SocialIcons/>
        </div>
      </DialogContent>
      <DialogActions>
        <div className="dialog-close-container" onClick={handleClose}>
          <div className="leftright"></div>
          <div className="rightleft"></div>
          <label className="close">close</label>
        </div>

      </DialogActions>
    </div>
  </Dialog>

    ;
}
