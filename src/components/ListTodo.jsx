import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";
import { setTodos } from "../store/actions";
import { useAuth } from "../contexts/Auth";

const ListTodo = () => {
  const dispatch = useDispatch();
  const { token } = useAuth();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/todos`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then(({todos}) => {
        dispatch(setTodos(todos));
      });
  }, [token, dispatch]);

  const { todos } = useSelector((state) => state.todoReducer);

  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo}></Todo>
      ))}
    </div>
  );
};

export default ListTodo;
