import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import SetCityContextsProvider from "./context/setcity-context/setcity.context";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-bootstrap-typeahead/css/Typeahead.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SetCityContextsProvider>
      <App />
    </SetCityContextsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

