import React from "react";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import { createBrowserHistory } from "history";

function App() {
  // const  history = createBrowserHistory();
  return (
    <BrowserRouter>
      <Routes /*  history={history} */>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
