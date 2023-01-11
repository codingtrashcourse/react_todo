import { nanoid } from 'nanoid'
import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO } from "../actions/types";

const initialState = {
  todos: [
    {
      id: nanoid(),
      text: "Play Mobile Legends",
      completed: false
    },
    {
      id: nanoid(),
      text: "Wash the dishes",
      completed: false
    }
  ],
}

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nanoid(),
            text: action.payload,
            completed: false,
          }
        ]
      }
    case REMOVE_TODO:
      const newTodoList = state.todos.filter((item) => item.id != action.payload)
      return {
        ...state,
        todos: newTodoList
      }
    case COMPLETE_TODO:
      const todos = JSON.parse(JSON.stringify(state.todos))
      const index = todos.findIndex((item) => item.id === action.payload)

      todos[index].completed = !todos[index].completed

      return {
        ...state,
        todos
      }
    default:
      return state
  }
}

export default todoReducer

