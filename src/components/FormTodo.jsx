import React from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/actions';
import { Form, Button } from 'react-bootstrap'

const FormTodo = () => {
  const dispatch = useDispatch()
  const [newTodo, setNewTodo] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTodo) return;

    dispatch(addTodo(newTodo));
    setNewTodo("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Add Todo</Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Button variant="primary" className="my-3" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default FormTodo