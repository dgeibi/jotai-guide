import React from 'react';
import ReactDOM from 'react-dom/client';
import { AtomsDevtools } from './AtomsDevtools.jsx';
import { Routes } from '@generouted/react-router/lazy';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AtomsDevtools>
      <Routes />
    </AtomsDevtools>
  </React.StrictMode>
);
