function TodoListItem (todo, onChange) {
    return (
        <div
            className={'list-group-item list-group-item-action list-group-item-warning'}
            onClick={() => onChange(todo)}
        >
            {todo.title}
        </div>
    )
}
export default TodoListItem;