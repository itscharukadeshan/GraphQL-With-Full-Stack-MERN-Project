/** @format */
import { FaIdBadge, FaEnvelope, FaPhone } from "react-icons/fa";

function ClientInfo({ client }) {
  return (
    <>
      {client.name && client.email && client.phone && (
        <>
          <ul>
            <ul className='menu bg-base-200 w-96 rounded-box shadow-xl mt-8'>
              <h5 className='text-md font-mono font-bold ml-3.5 my-4 bg-base'>
                {" "}
                Client info
              </h5>
              <li>
                <a>
                  <FaIdBadge />
                  Name
                  <span className='badge badge-sm'>{client.name}</span>
                </a>
              </li>
              <li>
                <a>
                  <FaEnvelope />
                  Email
                  <span className='badge badge-sm'>{client.email}</span>
                </a>
              </li>
              <li>
                <a>
                  <FaPhone />
                  Phone
                  <span className='badge badge-sm'>{client.phone}</span>
                </a>
              </li>
            </ul>
          </ul>
        </>
      )}
    </>
  );
}

export default ClientInfo;
