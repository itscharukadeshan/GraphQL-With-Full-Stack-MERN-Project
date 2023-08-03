/** @format */

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className='alert mt-40 w-96 rounded-box flex flex-col gap-4'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        className='stroke-current shrink-0 w-6 h-6'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path>
      </svg>
      <span>Sorry this page doesn't exist !</span>
      <Link to={"/"}>
        <button className='btn btn-info btn-outline'>Go back</button>
      </Link>
    </div>
  );
}

export default NotFound;
