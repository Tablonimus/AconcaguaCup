import React from "react";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/InicioNoti/Inicio";
import Landing from "./components/Home/Landing";
// import { createBrowserHistory } from "history";

function App() {
  // const  history = createBrowserHistory();
  return (
    <BrowserRouter>
      <Routes /*  history={history} */>

        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Inicio />} />
        <Route path="/noticia" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
