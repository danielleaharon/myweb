import React from 'react';
import './work.scss';
import MemoryGame from '../../components/memoryGame/index';


export default function Work(props) {


  React.useEffect(()=>{

    document.getElementById("navbar-menu").classList.add('nav-scroll')

  },[])

  return (
    <div id={"work"} className='work-section section area'  >
      <MemoryGame {...props} />
    </div>
  );
}
