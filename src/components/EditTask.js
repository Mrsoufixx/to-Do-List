import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { editTaskAction } from "../redux/actions/ActionsTask";


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
      navigate("/")
  };

  return (
    <div className="mb-4">
      <h1 className="text-grey-darkest">Todo List</h1>
      <div className="flex mt-4">
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
          placeholder="Add Todo"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={editBtn}
          className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default EditTask;