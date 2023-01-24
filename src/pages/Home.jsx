import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/Auth'
import FormTodo from '../components/FormTodo'
import ListTodo from '../components/ListTodo'

const Home = () => {
  const { token } = useAuth()

  return token ? (
    <div>
      <FormTodo />
      <ListTodo />
    </div>
  ) : (
    <Navigate to="signin" replace/>
  )
}

export default Home