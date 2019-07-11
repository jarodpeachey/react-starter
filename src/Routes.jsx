import React from 'react';
import { Route } from 'react-router';
import Application from './Application';

const routes = () => (
  <Route path="/" component={Application} />
);

export default routes;
