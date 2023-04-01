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
    Swal.fire({
      position: 'top',
      color: '#68B984',
      background: '#D7E9B9',
      title: 'Task Added',
      showConfirmButton: false,
      timer: 1000
    })
    dispatch(
      addTaskAction({
        id: idCount + 1,
        description: description,
        isDone: false,
      })
      
    );
    setDescription("")
   
  };

  return (
  
    <div className="mb-4">
      <h1 className="text-grey-darkest">Todo List</h1>
      <div className="flex mt-4">
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
          placeholder="Add Todo"
          onChange={(e) => setDescription(e.target.value)}
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
