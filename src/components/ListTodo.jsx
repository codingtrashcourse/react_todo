
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card } from 'react-bootstrap'
import Todo from './Todo'
import { setTodos } from '../store/actions'
import { supabase } from '../supabase'
import { useAuth } from '../contexts/Auth'

const ListTodo = () => {
  const dispatch = useDispatch()
  const { session } = useAuth()
  const [data, setData] = useState([])

  useEffect(() => {
    supabase
      .from('todos')
      .select('*')
      .eq('user', session.user.id)
      .order('id', { ascending: false })
      .then(({ data, error }) => {
        if(!error) {
          setData(data)
        }
      })
  }, [])

  useEffect(() => {
    dispatch(setTodos(data))
  }, [data])

  console.log(data)

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