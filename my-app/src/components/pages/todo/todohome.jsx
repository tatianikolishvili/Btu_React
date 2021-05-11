import { useState } from "react";
import AddTodoForm from "../../components/forms/addtodoform/addTodoForm";
import TodoList from "../../components/list/todo-list/TodoList";
import TodoListArray from "../../data/TodoList";
function TodoHome (props) {
    const [todoList, setTodoList] = useState(TodoListArray);
    const onTodoChange = (todo) => {
        const newTodo = {
            ...todo,
            completed: todo.completed
        }
    };
    return (
        <div className="row">
            <h1>Todo</h1>
            <div className="col-6">
                <AddTodoForm/>
            </div>
            <div className="col-6">
                <TodoList data = {todoList} onTodoChange={onTodoChange}/>
            </div>
            
        </div>
    )
}


export default TodoHome;