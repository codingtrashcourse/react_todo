import { SET_TODOS, ADD_TODO, REMOVE_TODO, COMPLETE_TODO, CHANGE_COLOR_TODO } from "../actions/types";

const initialState = {
  todos: [],
}

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.payload
      }
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload
        ]
      }
    case REMOVE_TODO:
      const newTodoList = state.todos.filter((item) => item.id !== action.payload)
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
    case CHANGE_COLOR_TODO:
      const currentTodos = JSON.parse(JSON.stringify(state.todos))
      const todoIndex = currentTodos.findIndex((item) => item.id === action.payload.code)

      currentTodos[todoIndex].color = action.payload.color

      return {
        ...state,
        todos: currentTodos
      }
    default:
      return state
  }
}

export default todoReducer

