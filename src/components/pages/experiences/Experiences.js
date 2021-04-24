import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import iListImg from '../../../images/ilist.png';
import fitshareImg from '../../../images/fitshare.png';
import AnimalImg from '../../../images/animalstore.png';

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
                  <img src={iListImg} alt='Danielle Aharon' />
                  <a id="img-top" onClick={iListDetails}>  <i class="fas fa-info-circle" ></i></a>
                  <a href="https://github.com/danielleaharon/androidproject" className="flot-il">
                    <i className='fab fa-github fa-lg'></i>
                    <br></br>
                    <span class="tooltiptext">Go to github</span>

                  </a>
                </div>


              </div>
              <div className="col s9 l8">

                <blockquote id="yellow" className="block" >
                  <h6 className="no-pad mt-bottom">
                    <strong> ILIST – List sharing app</strong>
                  </h6>

                  <p>

                    A shopping list app designed for easy sharing of your shopping list with your family or roommates.<br></br>
                    Features:<br></br>
                    *List sharing with your friends - Add, Edit & Delete any items in your list and seamlessly sync changes with your friends<br></br>
                    *Photo uploading for easy recognition of desired items<br></br>
                    *Tagging items as bought<br></br>
                    *Copy and send lists anymore you want<br></br>
                    *Supports Both Hebrew and English. And multiple colors schemes<br></br>
                    *server side in Firebase<br></br>

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

                <blockquote id="purple" className="block" >

                  <h6 className="no-pad mt-bottom">
                    <strong>FitShare – FullStack final project</strong>
                  </h6>
                  <p>
                    FitShare is a social network dedicated to home fitness.<br></br>
                    The app allows trainers to share videos of their workouts and open synchronized zoom meetings for trainees to join.<br></br>
                    Trainers also have an option to post their videos with special equipment needed and muscles group which the video is designed for.<br></br>
                    As a trainee, the app gives you a wide variety of workout options and trainers to choose from.<br></br>
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
                  <img src={AnimalImg} alt='Danielle Aharon' />
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
                    MVC online pet store architecture that includes a local database.<br></br>
                    Features user-specific recommendations based on previous interactions>/</p>
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
