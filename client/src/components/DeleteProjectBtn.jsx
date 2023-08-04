/** @format */
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { FaTrash } from "react-icons/fa";
import { DELETE_PROJECT } from "../mutations/projectMutation";
import { GET_PROJECTS } from "../queries/projectQueries";

export default function DeleteProjectBtn({ projectId }) {
  console.log(projectId);
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_PROJECTS }],
  });
  return (
    <>
      <button
        onClick={deleteProject}
        className='btn btn-sm btn-warning btn-outline'>
        <FaTrash /> Delete project
      </button>
    </>
  );
}
