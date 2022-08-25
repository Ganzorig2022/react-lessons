import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ButtonProvider } from './components/ButtonContext';
import { DataProvider } from './components/DataContext';
import { IDProvider } from './components/ExperienceIDContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>
      <IDProvider>
        <ButtonProvider>
          <App />
        </ButtonProvider>
      </IDProvider>
    </DataProvider>
  </React.StrictMode>
);

reportWebVitals();
