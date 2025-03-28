import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import MainComponent from './NavBar/MainComponent';
import ImageGenerator from './ImageGenerator';
import CarClass from './LifeCycle/CarClass';
import CarFunctional from './LifeCycle/CarFunctional';
import { ApiIntegration } from './charles/ApiIntegration';
import Main from './charles/Main'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ImageGenerator />
    <CarClass />
    <CarFunctional />
    <MainComponent />
    <ApiIntegration />
    <Main />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();