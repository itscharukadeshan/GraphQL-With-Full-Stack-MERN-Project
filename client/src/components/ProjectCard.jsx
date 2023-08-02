/** @format */

function ProjectCard({ project }) {
  console.log(project);
  return (
    <div className='card card-side bg-base-300 shadow-xl ml-5'>
      <div className='card-body'>
        <h2 className='card-title'>{project.name}</h2>
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
