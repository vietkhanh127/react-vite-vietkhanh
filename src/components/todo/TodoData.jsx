const TodoData = (props) => {
    const { todoList, deleTodo } = props
    const handleClick = (id) => {
        deleTodo(id)
    }
    return (

        <div className="todo-data" >
            {todoList.map((item, index) => {
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{item.name} - {item.id}</div>
                        <button onClick={() => handleClick(item.id)}>Delete</button>
                    </div>
                )

            })}
        </div >

    )
}
export default TodoData