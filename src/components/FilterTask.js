function FilterTask({ tasks,filteredTasks, onFilterChange }) {
      const doneTasks = tasks.filter((task) => task.isDone);
      const notDoneTasks = tasks.filter((task) => !task.isDone);
    console.log("notDoneTasks", notDoneTasks)
    console.log("doneTasks", doneTasks)
    
      const showAllTasks = () => {
        onFilterChange(tasks);
      };
    
      const showDoneTasks = () => {
        onFilterChange(doneTasks);
      };
    
      const showNotDoneTasks = () => {
        onFilterChange(notDoneTasks);
      };
    
      return (
        <div className="flex flex-col items-center">
          <div className="flex w-full justify-around p-2 ">
            <button onClick={showAllTasks} className="bg-gray-700 hover:bg-gray-800 text-white py-1 px-5 rounded">All ({tasks.length})</button>
            <button onClick={showDoneTasks} className="bg-gray-700 hover:bg-gray-800 text-white py-1 px-5 rounded">Done ({doneTasks.length})</button>
            <button onClick={showNotDoneTasks} className="bg-gray-700 hover:bg-gray-800 text-white py-1 px-5 rounded">Not done ({notDoneTasks.length})</button>
          </div>

        </div>
      );
    }

export default FilterTask