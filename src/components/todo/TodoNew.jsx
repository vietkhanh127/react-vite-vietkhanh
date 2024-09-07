import { useState } from "react"

const TodoNew = (props) => {
    const { addNewTodo } = props
    const [todo, setTodo] = useState('')
    const handleOnchange = (todolist) => {
        setTodo(todolist)

    }
    const handleClick = () => {
        addNewTodo(todo)
        setTodo('')
    }
    return (
        <div className="todo-new" >

            <input type="text" value={todo} onChange={(event) => handleOnchange(event.target.value)} />
            <button onClick={() => handleClick()}>Add</button>

        </div >
    )
}
export default TodoNew
