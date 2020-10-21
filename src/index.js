import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import App1 from './App1.jsx';
import "./index.css";
import BackImg from './BackImg.jsx';
import Topic from './Topic.jsx';


ReactDOM.render(
  <>
  <div className="back">
  <BackImg />
  {/* <Topic /> */}
  <div className="Cards">
    <App />
    <App />
    <App />
    <App />
    <App />
    <App />
    <App />
    <App />
    <App />
    <App />
    <App />
    <App />
  </div>
  {/* <Topic /> */}
  <div className="Cards1">
    <App1 />
    <App1 />
    <App1 />
    <App1 />
    <App1 />
    <App1 />
    <App1 />
    <App1 />
    <App1 />
    <App1 />
    <App1 />
    <App1 />
  </div>
  </div>
  </>,
  document.getElementById("root")
);
