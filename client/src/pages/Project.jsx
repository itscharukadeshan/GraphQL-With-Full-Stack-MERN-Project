/** @format */
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import { IoChevronBackCircleOutline } from "react-icons/io5";

import ClientInfo from "../components/ClientInfo";

function Project() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });

  if (loading)
    return <span className='loading loading-ring loading-sm'> loading </span>;
  if (error) return <span> Something went wrong</span>;

  return (
    <>
      {!loading && !error && (
        <>
          <div className='flex flex-col items-center mt-12'>
            <h5 className='text-2xl font-mono my-4 font-bold'>
              {data.project.name}
            </h5>
            <p className='text-lg my-2'>{data.project.description}</p>
            <div className='my-2 badge badge-outline lowercase'>
              {data.project.status}
            </div>
            <ClientInfo client={data.project.client} />
            <Link to={"/"}>
              <button className='btn btn-outline btn-sm lowercase mt-8'>
                <div className='flex flex-row items-center gap-2 '>
                  <>Back</>
                  <IoChevronBackCircleOutline className='mt-0.5 scale-x-[-1]' />
                </div>
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  );
}

export default Project;
