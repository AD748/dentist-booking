import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import bg from "./assets/bg.jpg"
import { ToastProvider } from "./context/ToastContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastProvider>
      <div className='bg-cover min-h-screen' style={{backgroundImage: `url(${bg})`}}>
        <App />
      </div>
    </ToastProvider>
  </StrictMode>
);