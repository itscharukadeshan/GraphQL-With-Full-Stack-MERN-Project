/** @format */

import Clients from "../components/Clients";
import Projects from "../components/Projects";
import AddClientModel from "../components/AddClientModel";
import AddProjectModel from "../components/AddProjectModel";

export default function Home() {
  return (
    <>
      <AddClientModel />
      <AddProjectModel />
      <Clients />
      <Projects />
    </>
  );
}
