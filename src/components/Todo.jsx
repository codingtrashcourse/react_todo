import { useDispatch } from "react-redux";
import { completeTodo, removeTodo, changeColorTodo } from '../store/actions'
import { Card, ButtonToolbar, ButtonGroup, Button } from "react-bootstrap";
import { supabase } from '../supabase'

const Todo = ({ todo, colors }) => {
  const dispatch = useDispatch()

  const handleChangeColor = (color) => {
    supabase
      .from('todos')
      .update({ color, updated_at: new Date() })
      .match({ code: todo.code })
      .then(({ data, error }) => {
        if(!error) {
          dispatch(changeColorTodo({ code: todo.code, color }))
        }
      })
  }

  const handleCompleteTodo = (e) => {
    e.preventDefault()

    supabase
      .from('todos')
      .update({ completed: !todo.completed, updated_at: new Date() })
      .match({ code: todo.code })
      .then(({ data, error }) => {
        if(!error) {
          dispatch(completeTodo(todo.code))
        }
      })
  }

  const handleRemoveTodo = (e) => {
    e.preventDefault()

    supabase
      .from('todos')
      .delete()
      .match({ code: todo.code })
      .then(({ error }) => {
        if(!error) {
          dispatch(removeTodo(todo.code))
        }
      })
    }

  return (
    <Card border={colors[todo.color]} className="mb-2">
      <Card.Body className="todo">
        <span style={{ textDecoration: todo.completed ? "line-through" : "" }}>
          { todo.name }
        </span>
          <ButtonToolbar>
            <ButtonGroup size="sm" className="me-2">
             { Object.keys(colors).map((color, index) => (
              <Button key={index} variant={colors[color]} onClick={e => { e.preventDefault(); handleChangeColor(color) }}>{color[0]}</Button>
             )) }
            </ButtonGroup>

            <ButtonGroup>
              <Button
                variant={todo.completed ? "success" : "outline-success"}
                onClick={handleCompleteTodo}
              >
                ✓
              </Button>
              <Button variant="outline-danger" onClick={handleRemoveTodo}>
                x
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
      </Card.Body>
    </Card>
  );
}

export default Todo