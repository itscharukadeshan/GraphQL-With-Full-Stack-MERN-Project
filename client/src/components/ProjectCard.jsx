/** @format */
import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div className='card card-side bg-base-300 shadow-xl ml-5 '>
      <div className='card-body'>
        <h2 className='card-title hover:text-warning '>
          {project.name} <FaExternalLinkAlt className='w-4 mt-2 h-full' />
        </h2>
        <p className=' w-50 h-fit py-2'>{project.description}</p>
        <div className='card-actions justify-end'>
          <div className='badge badge-warning badge-outline mt-4'>
            {project.status}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
