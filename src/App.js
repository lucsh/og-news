import React, { Fragment } from 'react';

import './tailwind.output.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Inicio from './components/Inicio';
import Seccion from './components/Seccion';
import Noticia from './components/Noticia';
import Nav from './components/Nav';
import SubHeader from './components/SubHeader';
import Footer from './components/Footer';

function App(props) {
  return (
    <div className="">
      <Router>
        <Nav />
        <SubHeader />
        <div className="lg:container lg:mx-auto bg-white p-4">
          <Switch>
            <Route exact path="/">
              <Inicio />
            </Route>
            <Route exact path="/:seccion">
              <Seccion />
            </Route>
            <Route path="/:seccion/:noticia">
              <Noticia {...props} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
