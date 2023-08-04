/** @format */
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className='navbar bg-gray-700 shadow-md '>
      <div className='btn btn-ghost normal-case text-xl text-pink-400 font-mono'>
        <Link to={"/"}>Graphql MERN</Link>
      </div>
    </div>
  );
}

export default NavBar;
