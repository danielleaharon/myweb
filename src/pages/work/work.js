import React from 'react';
import './work.scss';
import Navbar from '../../components/navbar/Navbar';
import MemoryGame from '../../components/memoryGame/index';
import Footer from '../../components/footer/footer';


export default function Work(props) {


  React.useEffect(()=>{

    document.getElementById("navbar-menu").classList.add('nav-scroll')

  },[])

  return (
    <div id={"work"} className='work-section section'  >
      <Navbar bgcolor="rgb(238, 238, 238)" txtcolor={'#04403D'} {...props} />
      <MemoryGame {...props} />
      <Footer bgcolor="rgb(238, 238, 238)" txtcolor={'#04403D'} />

    </div>
  );
}
