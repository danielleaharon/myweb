import React from 'react';
import {
  Dialog,
  DialogActions,
} from "@material-ui/core";
import "./dialog.scss";

const langLogosArray = {
  "Android studio": <i className="fab fa-android"></i>,
  "React": <i className="fab fa-react"></i>,
  "React&Wordpress": <div>  <i className="fab fa-react"></i>  React & <i className="fab fa-wordpress"></i>Wordpress Handles</div>
}

const langLogosTitels = {
  "Android studio": 'Android studio',
  "React": 'React',
  "React&Wordpress": ''
}

export default function DialogProject({ showModal, handleClose, content }) {

  const [seeDeomo, setSeeDemo] = React.useState(false);

  return (

    <Dialog
      open={showModal}
      disableEscapeKeyDown
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      id="dialog-project"
      className='dialog-project'   >
      <div id="dialog-title">
        {content.title}
        <div className="project-img">
          <img src={content.image} alt={content.title} />
        </div>
      </div>
      <div>
        <div id="dialog-description">
          <div className='lang-logo'>
            <div>
              {langLogosArray[content.lang]}
              {langLogosTitels[content.lang]}
            </div>
            <a className=' project-github' rel="noopener noreferrer" href={content.github} target='_blank'> <i className='fab fa-github fa-lg'></i>
              <span> see on GitHub</span>
            </a>
          </div>
          <div>
            {content.description}
            {content.demoweb && <a href={content.demoweb} rel="noopener noreferrer" className='see-demo-btn d-block' target='_blank'>See Demo
              <span className='arrow'>
                <i className="fas fa-angle-right"></i>
              </span>
            </a>}
            {content.demo && <div className='see-demo-btn' onClick={() => setSeeDemo(!seeDeomo)}>See Demo
              <span className='arrow'>
                <i className="fas fa-angle-right"></i>
              </span>
            </div>}
            {seeDeomo && <div className="content-demo">{content.demo}
              <div className="dialog-close-container d-md-none" onClick={() => setSeeDemo(!seeDeomo)}>
                <div className="leftright"></div>
                <div className="rightleft"></div>
                <label className="close">close</label>
              </div>
            </div>}
          </div>
        </div>
      </div>
      <DialogActions>
        <div className='project-btn-close' onClick={handleClose}>
          ok
        </div>
      </DialogActions>
    </Dialog>
  );
}