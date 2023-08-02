/** @format */
import { useQuery } from "@apollo/client";
import ClientRow from "../components/ClientRow";
import { GET_CLIENTS } from "../queries/clientQueries";

function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  if (loading)
    return <span className='loading loading-ring loading-sm'> loading </span>;
  if (error) return <span> Something went wrong</span>;

  return (
    <div className='overflow-x-auto'>
      {!loading && !error && (
        <table className='table w-96'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Clients;
