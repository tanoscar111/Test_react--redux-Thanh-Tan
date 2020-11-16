import {
    CREATE_TASK,   
    DELETE_TASK,
  } from '../Constants';
  
  const initialState = {
    todoList: [
      {
        id: 1,
        tittle: 'Viết code',
        note: 'Ahihi 1',
      },
      {
        id: 2,
        tittle: 'Dạy online',
        note: 'Ahihi 2',
      },
    ],
  };
  
  export default function todoListReducer(state = initialState, action) {
    switch (action.type) {
      case CREATE_TASK: {
        return {
          ...state,
          todoList: [
            action.payload,
            ...state.todoList,
          ],
        }
      }
      case DELETE_TASK: {
        const { id } = action.payload;
        const newTodoListData = state.todoList;
        const taskIndex = state.todoList.findIndex((item) => item.id === id);
        newTodoListData.splice(taskIndex, 1);
        return {
          ...state,
          todoList: [
            ...newTodoListData,
          ],
        }
      }
    
      default: {
        return state;
      }
    }
  }
  