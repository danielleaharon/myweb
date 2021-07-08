import React from 'react';

export default function Skills() {
  const [isMobile, setIsMobile] = React.useState('solid 17px #384A49');
  React.useEffect(()=>{
    console.log(isMobile)
    if(window.screen.width < 1280)
        setIsMobile('solid 5px #384A49');
 

  },[])
  return (
    <section id="skills">
    <div>
      <div className="card" style={{ borderBottom: isMobile}}>
        <div className="card-content">
          <h6 className='textback'>
            <strong>PROFESSIONAL SKILLS</strong>
          </h6>
        <hr></hr>
          <br></br>
       
          <div className="row">
            <div className="col s6">
              <p>C++</p>
           
            </div>
            <div className="col s6">
              <p>Java</p>
           
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <p>Scala</p>
          
            </div>
            <div className="col s6">
              <p>C</p>
           
            </div>
            
</div>


<div className="row">
            <div className="col s6">
              <p>React</p>
           
            </div>
            <div className="col s6">
              <p>JAVASCRIPT</p>
           
            </div>
          </div>
      
          <div className="row">
            <div className="col s6">
              <p>ASP.NET Core</p>
           
            </div>
            <div className="col s6">
              <p>Android studio</p>
           
            </div>
          </div>
        
          <div className="row">
            <div className="col s6">
              <p>Linux</p>
          
            </div>
            <div className="col s6">
              <p>Node.js</p>
              </div>
          </div>
          <div className="row">
            <div className="col s6">
              <p>MySQL</p>
          
            </div>
            <div className="col s6">
              <p>JQUERY</p>
          
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <p>Payton</p>
           
            </div>
            <div className="col s6">
              <p>Angular</p>
           
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>

    </div>
    </section>
  );
}
