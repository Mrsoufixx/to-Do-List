import React, { useEffect, useState } from "react";
import AddTask from "./AddTask";
import { useDispatch, useSelector } from "react-redux";
import { BsCircle, BsCheckCircleFill } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { editTaskAction, removeTaskAction } from "../redux/actions/ActionsTask";
import FilterTask from "./FilterTask";

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
  const handleFilterChange = (tasks)=>{
    setFilteredTasks(tasks)
  }
  
  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);
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
                className={`flex items-center p-2 mr-4 text-[20px] w-full ${
                  task.isDone ? "text-green-600" : "text-gray-900"
                }`}
                onClick={() => toggleDone(task.id)}
              >
                {task.isDone ? <BsCheckCircleFill /> : <BsCircle />}
                <p
                  className={`w-full flex ml-4 justify-start  whitespace-normal text-[14px]  ${
                    task.isDone ? "line-through" : ""
                  }`}
                >
                  {`${task.description[0].toUpperCase()}${task.description.slice(1,task.description.length)}`}
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
        <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        <FilterTask tasks={tasks} onFilterChange={handleFilterChange}/>
      </div>
    </>
  );
}

export default ListTask;
