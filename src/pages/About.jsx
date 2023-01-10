import { useContext  } from 'react'
import { AppContext } from '../App'
import { Card } from 'react-bootstrap'

const About = () => {
  const { todos } = useContext(AppContext)

  return (
    <div>
      {todos.map((todo, index) => (
        todo.completed ? (
          <Card key={index}>
          <Card.Body>
            <p>{todo.text}</p>
          </Card.Body>
        </Card>
        ) : null
      ))}
    </div>
  )
}

export default About