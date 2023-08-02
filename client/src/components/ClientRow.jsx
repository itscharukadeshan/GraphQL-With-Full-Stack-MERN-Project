/** @format */
import { FaTrash } from "react-icons/fa";

function ClientRow({ client }) {
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className='btn btn-sm btn-warning'>
          <FaTrash />
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ClientRow;
