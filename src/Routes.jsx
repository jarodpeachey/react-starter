import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import Application from './Application';
import Main from './components/pages/Main';

const routes = () => (
  <Route path="/" component={Application}>
    {
    (function runFunction () {
      return <IndexRedirect to="/welcome" />;
    }())
    }
    <Route path="/welcome" component={Main} />
  </Route>
);

export default routes;
