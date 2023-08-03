/** @format */

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='project/:id' element={<Project />}></Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
