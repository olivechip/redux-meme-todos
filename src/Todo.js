import { useSelector, useDispatch } from 'react-redux';
import { removeTodos } from './todosSlice';

const Todo = ({ id, todo }) => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(removeTodos(id));
    };
    console.log(todos.todos[id])

    return (
        <>
            <p>{todo}</p>
            <button id={id} onClick={handleClick}>X</button>
        </>
    );
};

export default Todo;