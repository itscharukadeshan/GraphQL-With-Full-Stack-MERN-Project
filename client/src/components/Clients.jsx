/** @format */
import { gql, useQuery } from "@apollo/client";
import ClientRow from "../components/ClientRow";

const GET_CLIENTS = gql`
  query getClient {
    clients {
      id
      name
      email
      phone
    }
  }
`;

function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  if (loading) return <span> loading </span>;
  if (error) return <span> Something went wrong</span>;

  return (
    <>
      {!loading && !error && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => {
              <ClientRow key={client.id} client={client} />;
            })}
          </tbody>
        </table>
      )}
      ;
    </>
  );
}

export default Clients;
