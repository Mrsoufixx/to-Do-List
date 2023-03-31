import { add_task,remove_task,edit_task } from "../constants/ActionTypes";

export const addTaskAction=(task)=>{
      return{
            type:add_task,
            payload:task
      }
}
export const editTaskAction=(newTask)=>{
      return{
            type:edit_task,
            payload:newTask
      }
}
export const removeTaskAction=(idTask)=>{
      return{
            type:remove_task,
            payload:idTask
      }
}