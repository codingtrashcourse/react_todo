import React from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/actions';
import { Form, Button } from 'react-bootstrap'
import { useAuth } from '../contexts/Auth'

const FormTodo = () => {
  const dispatch = useDispatch()
  const { token } = useAuth()

  const [title, setTitle] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title) return;

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/todos`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title }),
      })
      const { todo } = await response.json()
  
      dispatch(addTodo(todo));
      setTitle('');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Add Todo</Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Button variant="primary" className="my-3" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default FormTodo