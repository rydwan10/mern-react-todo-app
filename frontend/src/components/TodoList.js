import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => {
    return (
        <React.Fragment>
            {todos.map(todo => (
                    <Todo setTodos={setTodos} todos={todos} todo={todo} key={todo.id} />
                    ))
            }
        </React.Fragment>
    )
}

export default TodoList
