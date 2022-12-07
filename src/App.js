import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Work from './pages/work/work';
import Intro from './pages/intro/intro';
import './App.css';

function App() {
  const [mobmenu, setMobmenu] = React.useState(false)
  React.useEffect(() => {
    const appHeight = () => {
      const doc = document.documentElement
      doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    }
    window.addEventListener('resize', appHeight)
    appHeight()
  }, [])

  React.useEffect(() => {
    if (!mobmenu)
      document.getElementById("navbar-menu").classList.add('nav-scroll')

  }, [mobmenu]);

  return (

    <Router>
      <>
        <Route exact path="/" render={(props) => <Intro {...props} mobmenu={mobmenu} setMobmenu={(value) => setMobmenu(value)} />} />
        <Switch>
          <Route path="/work" render={(props) => <Work {...props} mobmenu={mobmenu} setMobmenu={(value) => setMobmenu(value)} />} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
