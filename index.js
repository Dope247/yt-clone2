import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM from 'react-dom'
import './index.css';
import App from './App'; // Correct the import statement for 'App'
import { BrowserRouter } from 'react-router-dom';
import { store } from "./app/store";
import { Provider } from "react-redux";


function Page() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

ReactDOM.render(<Provider store={store} ><Page/></Provider>, document.getElementById('root'));
