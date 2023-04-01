function FilterTask({ tasks, onFilterChange }) {
      const doneTasks = tasks.filter((task) => task.isDone);
      const notDoneTasks = tasks.filter((task) => !task.isDone);
    
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
          <div className="flex w-full justify-evenly p-2 ">
            <button onClick={showAllTasks}>All</button>
            <button onClick={showDoneTasks}>Done</button>
            <button onClick={showNotDoneTasks}>Not done</button>
          </div>
          <span>{tasks.length} Task</span>
        </div>
      );
    }

export default FilterTask