import React from 'react';
import styled from 'styled-components';
import check from '../icons/check.svg';
import back from '../icons/back.svg';
import trash from '../icons/trash.svg';

// Styled Components
const TodoItem = styled.input`
    padding: 5px 8px;
    width: 400px;
    font-size: 22px;
    border: 0;
`;

const DeleteButton = styled.button`
    padding: 10px 19px;
    font-size: 16px;
    background-color: #ff4e4e;
    border: none;
    color: #ffff;
    cursor: pointer;
    box-shadow: 3px 4px rgba(0, 0, 0, 0.2);
    margin-left: 5px;
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
            
    <CompleteButton className={todo.completed ? "completed-button" : ''} onClick={handleComplete}>{ todo.completed ? <img src={back} alt="back-icon"/> : <img src={check} alt="check-icon"/> }</CompleteButton>
            <TodoItem className={todo.completed ? "completed" : ''} readOnly={true} value={todo.title}/>
    <DeleteButton onClick={handleDelete}><img src={trash} alt="trash-icon" /></DeleteButton>
        </Container>
    )
}

export default Todo
