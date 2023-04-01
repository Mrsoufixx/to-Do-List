import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { editTaskAction } from "../redux/actions/ActionsTask";
import Swal from "sweetalert2";


function EditTask() {
  const {id} =useParams()
  const task = useSelector((data) => data.tasks.find(t=>t.id===parseInt(id)));

  const [description, setDescription] = useState(task.description);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const editBtn = () => {
    
    dispatch(
      editTaskAction({
        id: id,
        description: description,
        isDone: false,
      })
    );
    setDescription("")
      navigate("/")
      showEditAlert()
  };
  const showEditAlert = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Task Updated",
    });
  };

  return (
    <div className="mb-4">
      <h1 className="text-gray-800">Todo List</h1>
      <div className="flex mt-4">
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-800"
          placeholder="Add Todo"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={editBtn}
          className="flex-no-shrink p-2 border-2 rounded text-teal border-teal text-gray-800 hover:text-green-600 "
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default EditTask;