import React from 'react';
import './App.css';
import PatientInfo from "./components/PatientInfo";
import Konv from "./components/Konv";
import { ToastProvider } from 'react-toast-notifications';

function App() {
  return (
    <div className="App">
      <ToastProvider>
        <PatientInfo/>
      </ToastProvider>
    </div>
  );
}

export default App;
