import React, { useState } from "react";
import AddTask from "./AddTask";
import { useDispatch, useSelector } from "react-redux";
import { BsCircle } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { removeTaskAction } from "../redux/actions/ActionsTask";

function ListTask() {
  const [hoveredTaskId, setHoveredTaskId] = useState(null);
  const tasks = useSelector((data) => data.tasks);
  const dispatch = useDispatch();
  const removeBtn = (id) => {
    dispatch(removeTaskAction(id));
  };

  return (
    <>
      <AddTask />
      <div>
        {tasks.map((task, index) => {
          const isHovered = task.id === hoveredTaskId;
          return (
            <div
              key={index}
              className="flex items-center hover:bg-gray-50 h-12 rounded-md gap-1"
              onMouseEnter={() => setHoveredTaskId(task.id)}
              onMouseLeave={() => setHoveredTaskId(null)}
            >
              <button className="flex-no-shrink p-2 mr-4 text-green  hover:bg-green">
                <BsCircle />
              </button>
              <p className="w-full text-grey-950 whitespace-normal ">{task.description}</p>

              {isHovered && (
                <div className="flex p-2">
                  <Link to={`/edit/${task.id}`}>
                    <button className="flex-no-shrink px-1.5 py-1 rounded text-blue-600 hover:text-white hover:bg-blue-600">
                      <FiEdit3 />
                    </button>
                  </Link>

                  <button
                    onClick={() => removeBtn(task.id)}
                    className="flex-no-shrink px-1.5 py-1 rounded text-red-600 hover:text-white hover:bg-red-600 "
                  >
                    <MdOutlineClose />
                  </button>
                </div>
              )}
            </div>
          );
        })}
        <hr className="my-1"/>
        <div className="flex flex-col items-center">
          <div className="flex w-full justify-evenly p-2 ">
            <button>All</button>
            <button>Done</button>
            <button>Not done</button>
          </div>
          <span>count Task</span>
        </div>
      </div>
    </>
  );
}

export default ListTask;
