import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Work from './pages/work/work';
import Intro from './pages/intro/intro';
import NotFound from './pages/notfound/notfound';
import {sendData} from './components/email/email';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/footer';
import Contact from './pages/contact/contact';

import './App.css';

function App() {
  const [showContactModel, setShowContactModel] = React.useState(false);
  const [state, setState] = React.useState('intro-slug');

  React.useEffect(() => {
    const appHeight = () => {
      const doc = document.documentElement
      doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    }
    window.addEventListener('resize', appHeight)
    appHeight()
  }, [])

  React.useEffect(() => {
    sendData();
  },[])
  React.useEffect(() => {
		window.scrollTo(0,0)
	}, []);
  const NavRoute = ({exact,state, path, component: Component}) => (
    <Route exact={exact} path={path} render={(props) => (
      <div id="scroll-container-intro" className="scroll-container">
      <Navbar {...props} state={state} setShowContactModel={(val)=>{setState(state); setShowContactModel(val)}}/>
        <Component {...props} />
        {exact && <Footer {...props} state={state}  setShowContactModel={(val)=>{setState(state); setShowContactModel(val)}}/>}
      </div>
    )}/>
  )
  return (
<>
{showContactModel && <Contact state={state} showModal={showContactModel} handleClose={() => { setShowContactModel(false) }} />}
    <Router>

        <Switch>

          <NavRoute path="/work" exact  state={'work-slug'} component= {Work} />
          <NavRoute path="/" exact state={'intro-slug'} component={Intro} />
          <NavRoute path="/" state={'not-found'} component={NotFound}  />

        </Switch>
   

    </Router>
    </>
  );
}

export default App;
