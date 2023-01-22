import React from 'react';
import './about.scss';

export default function About() {

  return (

    <div id="intro-about-section" className='intro-about-section area'>
      <div className='intro-about'>
        <div className='title'> About me </div>
        <p>
          Hi, my name is Danielle and I am a frontend web developer lived in Rehovot, Israel. <br/>
          I am passionate about creating visually stunning and user-friendly websites that leave a lasting impression on users. With my expertise in HTML, CSS, and JavaScript, I bring my clients' visions to life on the web. I have an eye for detail and stay up-to-date with the latest web development trends to ensure that my projects are of the highest quality and exceed expectations.
        </p>
        <p>
        When I'm not working on web projects, I enjoy the simple things in life. <br/>
          I am married to my best friend, Chen, I love to cook and  training in kickboxing, which has taught me discipline and focus that I bring to my work.
        </p>
        <div className='skills '>
          <div className='skill-lines'>
            <div className='skill Front'>Front-end</div>
            <div className='skill Back'>Back-end</div>
            <div className='skill ReactJS'>ReactJS</div>
          </div>
          <div className='exp'>
            <div className='exp-card'>
              <div>
                <div>
                  <div className='card-title'>Frontend developer</div>
                  <div className='company'>JFrog</div>
                  <div className='time'>2021-present</div>
                  <div className='description'>Website maintenance on the server side and on the client side, use of Wordprees</div>
                </div>
              </div>
            </div>
            <div className='exp-card'>
              <div>
                <div>
                  <div className='card-title'>Full stack developer</div>
                  <div className='company'>4Legs</div>
                  <div className='time'>2020-2021</div>
                  <div className='description'>Building and maintaining the website on the server side and on the client side, dealing with a database</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
