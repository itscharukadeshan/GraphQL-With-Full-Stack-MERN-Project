/** @format */
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";
import ProjectCard from "./ProjectCard";

function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading)
    return <span className='loading loading-ring loading-sm'> loading </span>;

  if (error) return <span>Something went wrong !</span>;

  return (
    <>
      {data.projects.length > 0 ? (
        <div className='flex flex-col gap-4 sm:flex-row'>
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <>No project found !</>
      )}
    </>
  );
}

export default Projects;
