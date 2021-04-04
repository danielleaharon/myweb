import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import iListImg from '../../../images/ilist.png';
import fitshareImg from '../../../images/fitshare.png';
import AnimalImg from '../../../images/animalstore.png';
import AspNet from '../../../images/Asp-net.png';
import Info from '../../../images/info.png';

function iListDetails() {

  if (document.getElementById("ilist").style.display == "none") {
    document.getElementById("ilist").style.display = "block"
  }
  else { document.getElementById("ilist").style.display = "none" }
}
function fitshareDetails() {
  if (document.getElementById("fitshare").style.display == "none") {
    document.getElementById("fitshare").style.display = "block"

  }
  else {
    document.getElementById("fitshare").style.display = "none"

  }
}
function AnimalStoreDetails() {
  if (document.getElementById("animalstore").style.display == "none") {
    document.getElementById("animalstore").style.display = "block"

  }
  else {
    document.getElementById("animalstore").style.display = "none"

  }
}

export default function Experiences() {
  return (
    <section id="experiences" >

      <div >

        <div className="card">
          <div className="card-content">
            <h6>
              <strong>MY PROJECTS</strong>
            </h6>
            <br></br>
            <h8>
            <i class="fab fa-android"></i>  <strong>Android studio</strong>
            </h8>
            <hr></hr>
            <div className="row">
              <div className="col s9 l4 ">
   
                <div className="flot">
                  <img  src={iListImg} alt='Danielle Aharon' />
                <a id="img-top" onClick={iListDetails}>  <i class="fas fa-info-circle" ></i></a>
                  <a href="https://github.com/danielleaharon/androidproject" className="flot-il">
                    <i className='fab fa-github fa-lg'></i>
                    <br></br>
                    <span class="tooltiptext">Go to github</span>

                  </a>
                </div>

       
              </div>
              <div className="col s9 l8">

              <blockquote id="yellow"className="block" >
                  <h6 className="no-pad mt-bottom">
                    <strong> iList - List sharing app</strong>
                  </h6>

                  <p>

                    The app allows sharing of registered users, uploading photos to items in the list, deleting, adding, and tagging items.  Server side in firebase

                 <br></br> Also supports Hebrew and English and different colors.<br></br>
                    <br></br> <b>Feel free to play with the app </b>  <button onClick={iListDetails}>  click me!</button>          </p>
                  <br></br>
                <br></br>
              <div id="ilist" className="details">
            
               
                  <p align="center"> <iframe
                    src="https://appetize.io/embed/veudf5cvj43qu97h1c0gvrxnn4?device=pixel4"
                    width="308px" height="730px" frameborder="0" scrolling="no" ></iframe>
                  </p>

    
              </div>

                </blockquote>
              </div>
              </div>
           <div className="row">
              <div className="col s9 l4" >
                <div className="flot">
                  <img src={fitshareImg} alt='Danielle Aharon' />
                  <a id="img-top" >  <i class="fas fa-info-circle" ></i></a>

                  <a href="https://github.com/danielleaharon/fitshare" className="flot-il">
                    <i title="Github" className='fab fa-github fa-lg'></i>
                    <br></br>
                    <span class="tooltiptext">Go to github</span>

                  </a>
                </div>
              </div>
              <div className="col s9 l8">
            
              <blockquote id="purple"className="block" >

                  <h6 className="no-pad mt-bottom">
                    <strong>Final project specializing in full stuck</strong>
                  </h6>
                  <p>
                    A social network that allows you to upload videos for home training and opens meetings to invite trainees
                </p>
            
                </blockquote>

</div>
              </div>

            
         
            <br></br>
            <br></br>
            <h8>
             <h8 className="AspNet-icon">.Net</h8> <strong>ASP.NET Core</strong>
            </h8>
            <hr></hr>
            <div className="row">
              <div className="col s9 l4" >
                <div className="flot">
                  <img src={AnimalImg} alt='Danielle Aharon'  />
                  <a id="img-top" onClick={AnimalStoreDetails}>  <i class="fas fa-info-circle" ></i></a>

                  <a href="https://github.com/danielleaharon/animalstore" className="flot-il">
                    <i title="Github" className='fab fa-github fa-lg'></i>
                    <br></br>
                    <span class="tooltiptext">Go to github</span>

                  </a>
                </div>
              </div>
              <div className="col s9 l8">

              <blockquote id="blue" className="block" >
                  <h6 className="no-pad mt-bottom">
                    <strong> Animal Store</strong>
                  </h6>
                  <p>
                  MVC online pet store architecture that includes local database, recommendations to the user by learning his preferences and saving favorites for registered users        </p>
                  <br></br>
                

                </blockquote>
                </div>
            </div>
      
            </div>
          </div>
        </div>
    </section>
  );
}
