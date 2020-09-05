import React from 'react';
import styled from 'styled-components';
// Styled Components
const TodoItem = styled.input`
    padding: 5px 8px;
    width: 400px;
    font-size: 24px;
    outline: none;
`;

const DeleteButton = styled.button`
    padding: 10px 19px;
    font-size: 16px;
    background-color: #ff4e4e;
    border: none;
    color: #ffff;
    cursor: pointer;
    box-shadow: 3px 4px rgba(0, 0, 0, 0.2);
`;

const CompleteButton = styled.button`
    padding: 10px 19px;
    font-size: 16px;
    margin-left: 3px;
    background-color: #58d658;
    border: none;
    color: #ffff;
    cursor: pointer;
    box-shadow: 3px 4px rgba(0, 0, 0, 0.2);
    margin-right: 5px;
`

const Container = styled.div`
    display: flex;
    padding: 3px;
    flex-direction: row;
    justify-items: center;
`;


const Todo = ({ todo, todos, setTodos }) => {

    // Handle function
    const handleComplete = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return { ...item, completed: !item.completed }
            }
            return item;
        } ))
    }

    const handleDelete = () => {
        setTodos(todos.filter(item => item.id !== todo.id))
        // setTodos(todos.splice())                                        
    }

    return (
        <Container>
            <TodoItem className={todo.completed ? "completed" : ''} readOnly={true} value={todo.title}/>
            <CompleteButton className={todo.completed ? "completed-button" : ''} onClick={handleComplete}>{todo.completed ? '-' : 'Check'}</CompleteButton>
            <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
        </Container>
    )
}

export default Todo
