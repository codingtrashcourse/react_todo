
import { useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'
import Todo from './Todo'

const ListTodo = () => {
  const { todos } = useSelector((state) => state.todoReducer)

  return (
    <div>
      {todos.map((todo, index) => (
        <Card key={index}>
          <Card.Body>
            <Todo
              todo={todo}
            ></Todo>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default ListTodo