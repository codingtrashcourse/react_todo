
import { Card } from 'react-bootstrap'
import Todo from './Todo'

const ListTodo = ({ todos, completeTodo, removeTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <Card key={index}>
          <Card.Body>
            <Todo
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            ></Todo>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default ListTodo