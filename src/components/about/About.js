import React from 'react';
import './about.scss';

export default function About() {

  return (

    <div id="intro-about-section" className='intro-about-section area'>
      <div className='intro-about'>
        <div className='title'> About me </div>
        <p>
          I live in Rehovot,Israel, I met my husband in the army 7 years ago, and we recently got married.<br></br>
          I like to cook, train in kickboxing, and watch Netflix.
          My love for code started at the beginning of my computer science degree, and since then the world of the web has occupied a large part of my heart.
        </p>
        <p>
          Since graduation I have been involved in developing small websites including 4legs and Opium, today I working as Wordpress web developer at JFrog.</p>
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
                  <div className='description'>Website maintenance on the server side and on the client side, use of wordprees</div>
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
