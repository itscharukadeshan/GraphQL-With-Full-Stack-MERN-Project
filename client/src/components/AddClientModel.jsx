/** @format */

import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { ADD_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";

function AddClientModel() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: { name, email, phone },
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: clients.concat({ addClient }) },
      });
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "") {
      return alert("Please fill in all fields");
    }
    addClient(name, email, phone);
    setEmail("");
    setName("");
    setPhone("");
    handleClose();
  };
  const handleClose = () => {
    window.my_modal_1.close();
  };

  return (
    <>
      <button
        className='btn btn-outline m-5 btn-ac'
        onClick={() => window.my_modal_1.showModal()}>
        <div className='flex flex-row gap-2 items-center'>
          <FaUser />
          <div>add client</div>
        </div>
      </button>

      <dialog id='my_modal_1' className='modal'>
        <form method='dialog' onSubmit={onSubmit} className='modal-box'>
          <h3 className='font-bold text-lg'>Add Client</h3>
          <div className='py-4'>
            <div className='flex flex-col gap-4 '>
              <input
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='input input-bordered input-ascent w-full max-w-xs'
              />
              <input
                type='text'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='input input-bordered input-ascent w-full max-w-xs'
              />
              <input
                type='text'
                placeholder='Phone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className='input input-bordered input-ascent w-full max-w-xs'
              />
            </div>
          </div>

          <div className='modal-action'>
            <button type='submit' className='btn btn-warning btn-outline'>
              Submit
            </button>

            <button className='btn' onClick={handleClose}>
              Close
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default AddClientModel;
