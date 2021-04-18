import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import "normalize.css/normalize.css";

const App = lazy(() => import("./App"));
const Spinner = () => {
  return <div>CARGANDO...</div>;
};

export default Spinner;

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
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
