import { useDispatch } from "react-redux";
import { completeTodo, removeTodo, changeColorTodo } from '../store/actions'
import { Card, ButtonToolbar, ButtonGroup, Button } from "react-bootstrap";
import { supabase } from '../supabase'
import { useAuth } from '../contexts/Auth'

const Todo = ({ todo, colors }) => {
  const dispatch = useDispatch()
  const { token } = useAuth()

  const handleChangeColor = (color) => {
    supabase
      .from('todos')
      .update({ color, updated_at: new Date() })
      .match({ code: todo.code })
      .then(({ data, error }) => {
        if(!error) {
          dispatch(changeColorTodo({ code: todo.id, color }))
        }
      })
  }

  const handleCompleteTodo = async (e) => {
    e.preventDefault()

    try {
      await fetch(`${process.env.REACT_APP_API_URL}/todos/${todo.id}/complete`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
  
      dispatch(completeTodo(todo.id))
    } catch (error) {
      console.log(error)
    }
  }

  const handleRemoveTodo = async (e) => {
    e.preventDefault()

    try {
      await fetch(`${process.env.REACT_APP_API_URL}/todos/${todo.id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
  
      dispatch(removeTodo(todo.id))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Card className="mb-2" style={{ borderColor: todo.color }}>
      <Card.Body className="todo">
        <span style={{ textDecoration: todo.completed ? "line-through" : "" }}>
          { todo.title }
        </span>
          <ButtonToolbar>
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