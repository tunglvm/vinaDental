import React from 'react';
import ReactDOM from 'react-dom/client';
import RoterCustom from './router';
import { BrowserRouter } from "react-router-dom";

// Import global SCSS styles (applied to the whole application)
import './style/style.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RoterCustom/>
  </BrowserRouter>
);

