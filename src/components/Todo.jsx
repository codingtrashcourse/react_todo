import { useDispatch } from "react-redux";
import { completeTodo, removeTodo } from '../store/actions'
import { ButtonGroup, Button } from "react-bootstrap";

const Todo = ({ todo }) => {
  const dispatch = useDispatch()

  return (
    <div className="todo">
      <span style={{ textDecoration: todo.completed ? "line-through" : "" }}>
        {todo.text}
      </span>
      <ButtonGroup>
        <Button
          variant={todo.completed ? "success" : "outline-success"}
          onClick={() => dispatch(completeTodo(todo.id))}
        >
          ✓
        </Button>
        <Button variant="outline-danger" onClick={() => dispatch(removeTodo(todo.id))}>
          x
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Todo