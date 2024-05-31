import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleComplete } from './redux/Slice/toDoSlice'
import { nanoid } from 'nanoid';
import { Form, Table } from 'react-bootstrap';



function Home() {
    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();
  
    const [title, setTitle] = useState('');
  
    const handleAddTodo = () => {
      if (title.trim()) {
        dispatch(addTodo({ id: nanoid(), title, completed: false }));
        setTitle('');
      }
    };
  
    const handleDeleteTodo = (todoId) => {
      dispatch(deleteTodo(todoId));
    };
  
    const handleToggleComplete = (todoId) => {
      dispatch(toggleComplete(todoId));
    };
  
    
  return (
    <div style={{height:'100vh',backgroundColor:'#C1BDB3'}}>
       <h1>To do List</h1>
   
     
      <div className="card d-flex bg-dark justify-flex-start border-0 d-flex m-5 p-3">
       <div className='d-flex m-3'>
          <label htmlFor="input"></label>
          <Form.Control
      className='w-50'
        type="text"
        placeholder="Add a new task"
        aria-describedby="passwordHelpBlock"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
          <button onClick={handleAddTodo}  className='btn btn-danger ms-4'>Add Task</button>
       </div>
       <div className="form-check pt-2 d-flex justify-content-between border border-secondary text-secondary  ms-3 me-3 ">
 
    <div className='d-flex justify-content-between'>
        <tbody>
          {todos.map((todo) => (
                <tr key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                  <td>
        <Form><Form.Check checked={todo.completed} onChange={() => handleToggleComplete(todo.id)} className='ms-1' type="checkbox"/></Form>  
                  </td>
                  <td>{todo.title}</td>
                  <button onClick={() => handleDeleteTodo(todo.id)} className='btn btn-primary mb-3 ms-5 mt-3'>Delete</button>
                </tr>
              ))}
    
          </tbody>
    </div>
      </div>
      </div>
    

      
    </div>
  )
}

export default Home
