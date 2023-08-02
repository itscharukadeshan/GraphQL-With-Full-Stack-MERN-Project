/** @format */

import NavBar from "./components/NavBar";
import Clients from "./components/Clients";
import AddClientModel from "./components/AddClientModel";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <NavBar />
      <AddClientModel />
      <Clients />
      <Projects />
    </>
  );
}

export default App;
