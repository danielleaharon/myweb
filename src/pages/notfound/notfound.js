import React from 'react';
import './notfound.scss';
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import Contact from '../contact/contact';


export default function Work(props) {
	const [showContactModel, setShowContactModel] = React.useState(false);

  return (
    <>
    	{showContactModel && <Contact bgcolor='rgb(238, 238, 238)' txtcolor={'#04403D'}showModal={showContactModel} handleClose={() => { setShowContactModel(false) }} />}

    <div className='not-found-section section'  >
      <Navbar bgcolor="rgb(238, 238, 238)" txtcolor={'#04403D'} {...props} />
      <div className='not-found-content'>
        <div className='number d-inline'>
      {['4','0','4'].map((item, index) => {
                            if (item === " ")
                                return <span key={index} className=''> </span>
                            if (item === "br")
                                return <br key={index}></br>
                            return <span key={index} className=" jump" >	{item}</span>

                        })}
</div>        the page not found
        <div className='btn-arrow'><Link to='/' > Go to Intro </Link>
          <span className='arrow'>
            <i className="fas fa-angle-right"></i>
          </span>
        </div>
        <div className='btn-arrow  d-md-none' onClick={() => setShowContactModel(true)}><span> Contact me</span>
          <span className='arrow'>
            <i className="fas fa-angle-right"></i>
          </span>
        </div>
      </div>
      {/* <Footer bgcolor="rgb(238, 238, 238)" txtcolor={'#04403D'} /> */}

    </div>
    </>
  );
}
