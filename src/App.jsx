import './components/todo/todo.css'
import logoReact from './assets/react.svg'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import { useState } from 'react'
import Header from './components/layout/header'
import Footer from './components/layout/footer'


const App = () => {

  const [todoList, settodoList] = useState([])

  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const addNewTodo = (name) => {
    // alert(`me to ma ${name}`)
    const newTodo = {
      id: randomIntFromInterval(0, 1000000),
      name: name
    }
    settodoList([...todoList, newTodo])
  }
  const deleTodo = (id1) => {
    alert(id1)
    settodoList(todoList.filter((item) => item.id !== id1))
    //settodoList(todoList.filter(item => item.id !== id1))
  }

  return (
    <>
      <Header />
      <div className="todoApp">
        <div className="todo-title">Todo List</div>
        <TodoNew addNewTodo={addNewTodo} />
        {todoList.length !== 0
          ? <TodoData todoList={todoList} deleTodo={deleTodo} />
          :
          <div className="todo-img">
            <img src={logoReact} />
          </div>
        }

      </div>
      <Footer />
    </>
  )
}

export default App
