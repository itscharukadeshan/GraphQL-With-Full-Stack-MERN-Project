/** @format */

import { useState } from "react";
import { FaList, FaTimes } from "react-icons/fa";
import { useMutation, useQuery } from "@apollo/client";

import { GET_PROJECTS } from "../queries/projectQueries";
import { GET_CLIENTS } from "../queries/clientQueries";

function AddProjectModel() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [clientId, setClientId] = useState("");
  const { status, SetStatus } = useState("new");

  const { loading, error, data } = useQuery(GET_CLIENTS);

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || description === "" || status === "") {
      return alert("Please fill in all fields");
    }

    setName("");
    setEmail("");
    setPhone("");

    handleClose();
  };
  const handleClose = () => {
    window.my_modal_2.close();
  };

  if (loading) return null;
  if (error) return <div>Something went wrong ! </div>;

  return (
    <>
      {!loading && !error && (
        <>
          {" "}
          <button
            className='btn btn-outline m-5 btn-ac'
            onClick={() => window.my_modal_2.showModal()}>
            <FaList />
            <div>add project</div>
          </button>
          <dialog
            id='my_modal_2'
            className='modal mt-20 flex flex-col gap-12`  shadow-lg'>
            <form method='dialog' onSubmit={onSubmit} className='modal-box'>
              <h3 className='font-bold text-lg mb-2'>Add Project</h3>

              <label className='label'>
                <span className='label-text'>Name </span>
              </label>
              <div className='py-4'>
                <div className='flex flex-col gap-1 '>
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
                    className=' textarea textarea-bordered w-full max-w-xs'></textarea>

                  <label className='label'>
                    <span className='label-text'>Status</span>
                  </label>

                  <select
                    onChange={(e) => SetStatus(e.target.value)}
                    id='status'
                    className='select select-bordered select-sm w-full max-w-xs'>
                    <option disabled selected>
                      Not started
                    </option>
                    <option value={"new"}>Not started</option>
                    <option value={"progress"}>In Progress</option>
                    <option value={"completed"}>Completed</option>
                  </select>
                  <label className='label'>
                    <span className='label-text'>Select Client</span>
                  </label>

                  <select
                    onChange={(e) => setClientId(e.target.value)}
                    id='client'
                    className='select select-bordered select-sm w-full max-w-xs'>
                    <option disabled selected>
                      Clients
                    </option>
                    <option value=''>Clients</option>
                    {data.clients.map((client) => (
                      <option key={clientId} value={clientId}>
                        {client.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className='modal-action'>
                <button type='submit' className='btn btn-warning btn-outline'>
                  Submit
                </button>
              </div>
            </form>
            <button
              className='btn btn-outline btn-circle mt-2'
              onClick={handleClose}>
              <FaTimes />
            </button>
          </dialog>
        </>
      )}
    </>
  );
}

export default AddProjectModel;
