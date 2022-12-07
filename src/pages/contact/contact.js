import React from 'react';
import './contact.scss';
import MeCool from '../../images/me-cool.png';


import {
  Dialog,
  DialogActions,
  DialogContent,
} from "@material-ui/core";

export default function Contact({ showModal, handleClose, bgcolor, txtcolor }) {

  return <Dialog
    open={showModal}
    fullWidth
    disableEscapeKeyDown
    aria-labelledby="dialog-title"
    aria-describedby="dialog-description"
    id="dialog-contact"
    maxWidth='xl'
    style={{ '--bgcolor': bgcolor, '--txtcolor': txtcolor }} >
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
          <div className='social-icons-links'>
            <div className="link">
              <a className="icon-link" rel="noopener noreferrer" href="https://www.facebook.com/daniella.aharon.7/" aria-label="facebook" target="_blank" ><i className="fab fa-facebook-f" aria-hidden="true"></i> </a>
            </div>
            <div className="link">
              <a className="icon-link" rel="noopener noreferrer" href="https://www.linkedin.com/in/danielle-aharon-478b67199/" aria-label="linkedin" target="_blank"><i className="fab fa-linkedin-in" aria-hidden="true"></i> </a>
            </div>
            <div className="link"><a className="icon-link" rel="noopener noreferrer" href="https://github.com/danielleaharon" aria-label="github" target="_blank"><i className='fab fa-github fa-lg' aria-hidden="true"></i> </a>
            </div>
          </div>
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
