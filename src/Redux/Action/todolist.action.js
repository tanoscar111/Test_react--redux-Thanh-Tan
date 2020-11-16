import {
    CREATE_TASK,
    DELETE_TASK,

} from '../Constants';
export function createTask(params) {
    console.log("TCL: createTask -> params", params)
    return {
      type: CREATE_TASK,
      payload: params,
    }
  } 
export function deleteTask(params) {
    return {
      type: DELETE_TASK,
      payload: params,
    }
  }
  