import React, { useState } from "react";
import AddTask from "./AddTask";
import { useDispatch, useSelector } from "react-redux";
import { BsCircle, BsCheckCircleFill } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { editTaskAction, removeTaskAction } from "../redux/actions/ActionsTask";

function ListTask() {
  const [hoveredTaskId, setHoveredTaskId] = useState(null);
  const tasks = useSelector((data) => data.tasks);
  const dispatch = useDispatch();
  const removeBtn = (id) => {
    dispatch(removeTaskAction(id));
  };
  const toggleDone = (id) => {
    const updatedTask = tasks.find((task) => task.id === id);
    updatedTask.isDone = !updatedTask.isDone;
    dispatch(editTaskAction(updatedTask));
  };

  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const showAllTasks = () => {
    setFilteredTasks(tasks);
  };

  const showDoneTasks = () => {
    setFilteredTasks(tasks.filter((task) => task.isDone));
  };

  const showNotDoneTasks = () => {
    setFilteredTasks(tasks.filter((task) => !task.isDone));
  };

  return (
    <>
      <AddTask />
      <div>
        {filteredTasks.map((task, index) => {
          const isHovered = task.id === hoveredTaskId;
          return (
            <div
              key={index}
              className="flex items-center hover:bg-gray-50 h-12 rounded-md gap-1"
              onMouseEnter={() => setHoveredTaskId(task.id)}
              onMouseLeave={() => setHoveredTaskId(null)}
            >
              <button
                className="flex gap-3 p-2 mr-4 text-gray-800 text-[20px] w-full"
                onClick={() => toggleDone(task.id)}
              >
                {task.isDone ? <BsCheckCircleFill /> : <BsCircle />}
                <p className="w-full flex justify-start text-grey-950 whitespace-normal text-[14px]">
                  {task.description}
                </p>
              </button>
              {isHovered && (
                <div className="flex gap-2 items-center p-2">
                  <Link to={`/edit/${task.id}`}>
                    <button className=" text-gray-800 hover:text-blue-600 text-[20px] translate-y-1">
                      <FiEdit3 />
                    </button>
                  </Link>
                  <button
                    onClick={() => removeBtn(task.id)}
                    className=" text-gray-800 hover:text-red-600  text-[25px]"
                  >
                    <MdOutlineClose />
                  </button>
                </div>
              )}
            </div>
          );
        })}
        <hr className="my-1" />
        <div className="flex flex-col items-center">
          <div className="flex w-full justify-evenly p-2 ">
            <button onClick={showAllTasks}>All</button>
            <button onClick={showDoneTasks}>Done</button>
            <button onClick={showNotDoneTasks}>Not done</button>
          </div>
          <span>{filteredTasks.length} tasks</span>
        </div>
      </div>
    </>
  );
}

export default ListTask;
