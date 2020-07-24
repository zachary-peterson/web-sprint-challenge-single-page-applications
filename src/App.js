import React from "react";
import {Route, Switch} from 'react-router-dom';
import Home from './Home'

const App = () => {
  return (
    <div>
      <Switch>
      <Route path='/pizza'>
         
      </Route>
      <Route exact path='/'>
        <Home />
      </Route>
      </Switch>
    </div>
  );
};
export default App;
