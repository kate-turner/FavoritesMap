import React from 'react';
import './app.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapView } from './map-view';
import Controller from "./Controller";

function App() {
  return (
    <div className="App">
      <Controller/>
    </div>
  )
}

export { App };
