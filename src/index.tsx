import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider, QuizProvider } from './contexts';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <QuizProvider>
          <App />
        </QuizProvider>
      </AuthProvider>

    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
