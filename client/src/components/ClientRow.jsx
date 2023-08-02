/** @format */
import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/clientMutations";

function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
  });

  return (
    <tr className='hover'>
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
