const TodoData = (props) => {
    const { todoList } = props
    return (

        <div className="todo-data" >
            {todoList.map((item, index) => {
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{item.name} - {item.id}</div>
                        <button>Delete</button>
                    </div>
                )

            })}
        </div >

    )
}
export default TodoData