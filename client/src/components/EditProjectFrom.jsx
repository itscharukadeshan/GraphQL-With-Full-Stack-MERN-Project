/** @format */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import { UPDATE_PROJECT } from "../mutations/projectMutation";

function EditProjectFrom({ project }) {
  const navigate = useNavigate();

  const getStatusValue = (status) => {
    switch (status) {
      case "Not started":
        return "new";
      case "In Progress":
        return "progress";
      case "Completed":
        return "completed";
      default:
        return "Not started";
    }
  };

  const initialStatus = getStatusValue(project.status);

  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState(initialStatus);

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: { id: project.id, name, description, status },
    refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !description || !status) {
      return alert("Please fill out all the fields");
    }
    updateProject({ variables: { id: project.id, name, description, status } });
    navigate(`/`);
  };

  return (
    <form
      className=' bg-base-300 px-16 pt-8 pb-16 rounded-box shadow-sm mt-6'
      onSubmit={handleSubmit}>
      <h5 className='text-3xl font-bold my-4'>Edit</h5>

      <div className='flex flex-col gap-1 '>
        <label className='label'>
          <span className='label-text'>Name </span>
        </label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='input input-bordered input-ascent w-full max-w-xs'
        />

        <label className='label'>
          <span className='label-text'>Description</span>
        </label>
        <textarea
          value={description}
          id='description'
          onChange={(e) => setDescription(e.target.value)}
          className='textarea textarea-bordered w-full max-w-xs'></textarea>

        <label className='label'>
          <span className='label-text'>Status</span>
        </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          id='status'
          className='select select-bordered select-sm w-full max-w-xs'>
          <option value='new'>Not started</option>
          <option value='progress'>In Progress</option>
          <option value='completed'>Completed</option>
        </select>

        <button type='submit' className='btn btn-outline btn-warning mt-4'>
          Submit
        </button>
      </div>
    </form>
  );
}

export default EditProjectFrom;
