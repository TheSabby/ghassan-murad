import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Project from './views/Project';
import NotFound from './views/NotFound';

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Home} />
        <Route path="/projects/:projectSlug" component={Project} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
