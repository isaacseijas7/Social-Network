import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import MainSpinner from "components/Main/Spinner";
import "normalize.css/normalize.css";

const App = lazy(() => import("./App"));

export default MainSpinner;

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<MainSpinner />}>
      <div>
        <App />
      </div>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
