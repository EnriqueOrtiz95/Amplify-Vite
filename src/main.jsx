import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { AmplifyProvider } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import config from './aws-exports'

Amplify.configure(config)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AmplifyProvider>
      <App />
    </AmplifyProvider>
  </React.StrictMode>
);
