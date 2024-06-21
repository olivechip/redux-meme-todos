import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodos, clear } from './todosSlice';
import Todo from './Todo';

const Todos = () => {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch();

    const [ todo, setTodo ] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setTodo(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodos(todo));
        setTodo('');
    };

    const handleClick = () => {
        dispatch(clear());
    };

    console.log(todos.todos)

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input required placeholder="Enter todo" value={todo} onChange={handleChange}></input>
                <button>Add Todo</button>
            </form>
            <button onClick={handleClick}>Clear Todo List</button>
            <ul>
                { todos.todos && todos.todos.length === 0 ? (
                    <p>You have not yet added any todos.</p>
                ) : (
                    todos.todos.map((todo, index) => (
                        <li key={index}><Todo id={index} todo={todo}/></li>
                    ))
                )}
            </ul>
        </div>
    )
}

export default Todos;