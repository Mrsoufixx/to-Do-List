import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {BsCircle} from "react-icons/bs"
import {FiEdit} from "react-icons/fi"
import {MdOutlineClose} from 'react-icons/md'
import { Link } from "react-router-dom";
import { removeTaskAction } from "../redux/actions/ActionsTask";


function ListTask() {
  const tasks = useSelector((data) => data.tasks);
  const dispatch = useDispatch()
  const removeBtn =(id)=>{
    dispatch(removeTaskAction(id))
  }
  console.log(tasks)
  return (
    <div>
      {tasks.map((task, index) => {
        return (
          <div key={index} className="flex mb-4 items-center">
            <button className="flex-no-shrink p-2 mr-4 text-green border-green hover:bg-green">
            <BsCircle/>
            </button>
            <p className="w-full text-grey-darkest">{task.description}</p>

            <Link to={`/edit/${task.id}`}>
            <button className="flex-no-shrink p-2 ml-2 rounded text-red border-red hover:text-white hover:bg-red">
              <FiEdit/>
            </button>
            </Link>
            
            <button onClick={()=>removeBtn(task.id)} className="flex-no-shrink p-2 ml-2  rounded text-red hover:text-white hover:bg-red">
            <MdOutlineClose/>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ListTask;
