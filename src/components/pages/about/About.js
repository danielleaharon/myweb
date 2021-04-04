import React from 'react';
import cv from '../../../images/CVDanielleAharon.pdf';
import ImgProfile from '../../../images/myimage.png';


export default function About() {
  return (
    <section id="about" >
  
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <div className="row">
         
         <img  src={ImgProfile} alt='Danielle Aharon' />
          <div className="col s12 m8 l9">
          <p className="white-text">
          Third-year Computer Science student, Looking to take the first step in the high-tech programming world. 
          </p>
          <p className="white-text">
          Has extensive vision, interpersonal communication and a high level of service, thorough, strategic and professional.
          </p>
          </div>
       
        </div>
        <br></br>
          <br></br>
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <hr></hr>
          <br></br>
         
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Address:</strong> Ramat Hashhron
              </p>
              <br></br>
              <p>
                <strong>Email:</strong>  <a  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ah.danielle22@gmail.com" target="_blank"><il className="a-href">ah.danielle22@gmail.com</il></a>
              </p>
              <br></br>

              <p>
                <strong>Phone:</strong> 054-5480180
              </p>
              <br></br>

            </div>
            
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Main Language</strong> - Hebrew
              </p>
              <br></br>

              <p>
                <strong>Second Language</strong> - English
              </p>
              <br></br>

              <p>
                <strong>My resume:</strong>
                 <a href={cv} target="_blank"> <il className="a-href2">Click to open </il> </a>
              </p>
            </div>
           
     
          </div>
        </div>        </div>

        <br></br>

  
    </section>
  );
}
