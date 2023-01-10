import { useContext } from 'react'
import { AppContext } from '../App'
import FormTodo from '../components/FormTodo'
import ListTodo from '../components/ListTodo'

const Home = () => {
  const { todos, setTodos } = useContext(AppContext)
  const addTodo = (text) => {
    const pendingTodos = [...todos, { text }];

    setTodos(pendingTodos);
  };
  const removeTodo = (index) => {
    const pendingTodos = [...todos];
    pendingTodos.splice(index, 1);

    setTodos(pendingTodos);
  };

  const completeTodo = (index) => {
    const pendingTodos = [...todos];
    pendingTodos[index].completed = !pendingTodos[index].completed;

    setTodos(pendingTodos);
  };

  return (
    <div>
      <FormTodo addTodo={addTodo} />
      <ListTodo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>
    </div>
  )
}

export default Home