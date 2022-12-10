import React from 'react';
import './notfound.scss';
import { Link } from 'react-router-dom';
import LetterJump from '../../components/letterJump/letterJump';


export default function Work(props) {

  return (
    <div className='not-found-section section'  >
      <div className='not-found-content'>
        <div className='number d-inline'>
          <LetterJump textarr={['4', '0', '4']} />
        </div>        the page not found
        <div className='btn-arrow'><Link to='/' > Go to Intro </Link>
          <span className='arrow'>
            <i className="fas fa-angle-right"></i>
          </span>
        </div>
        <div className='btn-arrow  d-md-none' onClick={() => props.setShowContactModel(true)}><span> Contact me</span>
          <span className='arrow'>
            <i className="fas fa-angle-right"></i>
          </span>
        </div>
      </div>
    </div>

  );
}
