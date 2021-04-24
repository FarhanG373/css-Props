import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import BoxShadow from './components/BoxShadow/BoxShadow';
import Navigation from './components/Navigation/Navigation';
import Heading from './components/Heading/Heading';
import Paragraph from './components/Paragraph/Paragraph';
import Button from './components/Button/Button';
import Image from './components/Image/Image';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Switch>
        <Route exact path="/" component={Card}/>
        <Route exact path="/image" component={Image}/>
          <Route exact path="/box-shadow" component={BoxShadow}/>
          <Route exact path="/heading" component={Heading}/>
          <Route exact path="/paragraph" component={Paragraph}/>
          <Route exact path="/button" component={Button}/>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
