import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";



import { addTaskAction } from "../redux/actions/ActionsTask";


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
          className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTask;
