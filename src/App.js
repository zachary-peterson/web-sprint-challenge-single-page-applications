import React, {useEffect, useState} from "react";
import {Route, Switch} from 'react-router-dom';
import Home from './Home'
import PizzaForm from './PizzaForm'

import * as yup from 'yup';

const App = () => {

  return (
    <div>
      <Switch>
      <Route path='/pizza'>
         <PizzaForm />
      </Route>
      <Route exact path='/'>
        <Home />
      </Route>
      </Switch>
    </div>
  );
};
export default App;
