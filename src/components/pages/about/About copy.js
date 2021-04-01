import React from 'react';
import cv from '../../../images/CVDanielleAharon.pdf';
import { HashLink as Link } from 'react-router-hash-link';


export default function About() {
  return (
    	// <nav className='light-blue-danielle '>
			// 		<div className='container'>
			// 			<div className='nav-wrapper'>
						

			// 				<Link  to='/' className='brand-logo'>
			// 				Danielle Aharon
			// 				</Link>
			// 				<Link to='/' data-target='side-nav' className='sidenav-trigger'>
			// 					<i className='material-icons'>menu</i>
			// 				</Link>
			// 				<ul className='right hide-on-med-and-down'>
			// 					<li >
			// 						<Link to='#home'>
			// 							<i class='fas fa-home'></i> Home
			// 						</Link>
			// 					</li>
			// 					<li>
			// 						<Link to='#skills'>
			// 							<i class='fas fa-copy'></i> Skills
			// 						</Link>
			// 					</li>
			// 					<li >
			// 						<Link to='#experiences'>
			// 							<i class='fas fa-id-badge'></i> My Project
			// 						</Link>
			// 					</li>
								
			// 					<li>
			// 						<Link to='#about'>
			// 							<i class='fas fa-address-card'></i> About
			// 						</Link>
			// 					</li>
			// 				</ul>
			// 			</div>
					
			// 		</div>
			// 	</nav>
    <section id="navbar" className="menu">
    <div >
      <div className="card">
        <div className="card-content">
          <div className="myrow">
            <div className="mycolumn">
            <Link  to='/' className='brand-logo'>
							Danielle Aharon
							</Link>
							{/* <Link to='/' data-target='side-nav' className='sidenav-trigger'>
								<i className='material-icons'>menu</i>
							</Link> */}
         
          </div>
          <div className="mycolumn">
          <Link to='#about'>
										<i class='fas fa-address-card'></i> About
									</Link>
          </div>
          <div className="mycolumn">
          <Link to='#experiences'>
										<i class='fas fa-id-badge'></i> My Project
									</Link>
          </div>
          <div className="mycolumn">
          <Link to='#skills'>
										<i class='fas fa-copy'></i> Skills
						</Link>
          </div>
          </div>
    </div>
    </div>
    </div>

    </section>
  );
}
