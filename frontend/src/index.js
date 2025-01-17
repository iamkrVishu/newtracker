// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Theme wrapper to handle dark mode dynamically based on Redux state
const ThemeWrapper = ({ children }) => {
//   const darkMode = useSelector((state) => state.habitReducer.darkMode);
React.useEffect(() => {
},
[]);
 return children;
};

// Render the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeWrapper>
        <ToastContainer position="top-right" autoClose={400} />
        <App />
      </ThemeWrapper>
  </React.StrictMode>
  
);


