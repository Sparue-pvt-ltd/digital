import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
//https://medium.com/how-to-react/how-to-use-react-router-in-your-react-js-project-7e1d469a9716

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services'
import CaseStudies from './pages/CaseStudies'
import Contacts from './pages/Contacts'
import Pricing from './pages/Pricing'
import SingleService from './pages/SingleService';
import SingleCaseStudy from './pages/SingleCaseStudy';

const Routing = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/service/:id" component={SingleService} />
        <Route path="/case-study/:id" component={SingleCaseStudy} />
        <Route path="*" component={Home} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Routing/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// reportWebVitals(console.log);