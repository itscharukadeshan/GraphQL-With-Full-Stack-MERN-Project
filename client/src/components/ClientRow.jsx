/** @format */
import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";
import { GET_PROJECTS } from "../queries/projectQueries";

function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },

    update(cache, { data: { deleteClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: clients.filter((c) => c.id !== deleteClient.id),
        },
      });
    },

    refetchQueries: [{ query: GET_PROJECTS }],
  });

  return (
    <tr className='bg-gray-800'>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button
          onClick={deleteClient}
          className='btn btn-outline btn-sm btn-warning'>
          <div className='flex flex-row gap-2 items-center'>
            <FaTrash />
            <div>delete</div>
          </div>
        </button>
      </td>
    </tr>
  );
}

export default ClientRow;
