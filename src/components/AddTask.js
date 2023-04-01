import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {AiOutlinePlus} from "react-icons/ai"
import { addTaskAction } from "../redux/actions/ActionsTask";
import Swal from "sweetalert2";


function AddTask() {
  const idCount = useSelector((data) => data.tasks.length);
  

  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const addBtn = () => {
    dispatch(
      addTaskAction({
        id: idCount + 1,
        description: description,
        isDone: false,
      })
      
    );
    setDescription("")
    showAddedAlert()
   
  };
  const showAddedAlert = () => {
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
      title: "Task Added",
    });
  };

  return (
  
    <div className="mb-4">
      <h1 className="text-grey-darkest">Todo List</h1>
      <div className="flex mt-4">
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
          placeholder="Add Tasks"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button
          onClick={addBtn}
          
          className="flex-no-shrink py-2 px-3 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal "
        >
         <AiOutlinePlus/>
        </button>
      </div>
    </div>
  );
}

export default AddTask;
