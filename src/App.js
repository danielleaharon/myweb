import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Work from './pages/work/work';
import Intro from './pages/intro/intro';
import NotFound from './pages/notfound/notfound';
// import {sendData} from './components/email/email';

import './App.css';

function App() {
  const [mobmenu, setMobmenu] = React.useState(false);
  React.useEffect(() => {
    const appHeight = () => {
      const doc = document.documentElement
      doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    }
    window.addEventListener('resize', appHeight)
    appHeight()
  }, [])

  // React.useEffect(() => {
  //   sendData();
  // },[])
  React.useEffect(() => {
    if (!mobmenu)
      document.getElementById("navbar-menu").classList.add('nav-scroll')

  }, [mobmenu]);

  return (

    <Router>
      
        <Switch>

          <Route  path="/work" exact render={(props) => <Work {...props} mobmenu={mobmenu} setMobmenu={(value) => setMobmenu(value)} />} />
          <Route  path="/" exact render={(props) => <Intro {...props} mobmenu={mobmenu} setMobmenu={(value) => setMobmenu(value)} />} />
          <Route path="/" render={(props) => <NotFound {...props} mobmenu={mobmenu} setMobmenu={(value) => setMobmenu(value)} />} />

        </Switch>

    
    </Router>
  );
}

export default App;
