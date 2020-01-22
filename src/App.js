import React from 'react';

import {Route,} from "react-router-dom";
import Routes from "./constants/routes";
import './App.css';

import {
    Categories,
    Login,
    Profile,
    Home, Header,
} from "./components";

const App = () => {
  return (
      <div className="App">
              <Header />
                  <Route  path={Routes.INDEX} component={Categories} />
                  <Route  path={Routes.LOGIN} component={Login} />
                  <Route  path={Routes.PROFILE} component={Profile} />
                  <Route exact path={Routes.HOME} component={Home} />
      </div>
  );
};

export default App;