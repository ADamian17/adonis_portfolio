import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Homepage from '../pages/HomePage/HomePage'
import Projects from '../pages/Projects/Projects'



export default () => (
  <Switch>
    <Route exact path='/' component={Homepage} />
    <Route path='/projects' component={Projects} />
  </Switch>
)