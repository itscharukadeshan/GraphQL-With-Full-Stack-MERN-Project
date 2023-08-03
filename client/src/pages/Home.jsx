/** @format */

import Clients from "../components/Clients";
import Projects from "../components/Projects";
import AddClientModel from "../components/AddClientModel";

export default function Home() {
  return (
    <>
      <AddClientModel />
      <Clients />
      <Projects />
    </>
  );
}
