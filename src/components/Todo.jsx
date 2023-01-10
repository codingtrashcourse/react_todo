import { ButtonGroup, Button } from "react-bootstrap";

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.completed ? "line-through" : "" }}>
        {todo.text}
      </span>
      <ButtonGroup>
        <Button
          variant={todo.completed ? "success" : "outline-success"}
          onClick={() => completeTodo(index)}
        >
          ✓
        </Button>
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>
          x
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Todo