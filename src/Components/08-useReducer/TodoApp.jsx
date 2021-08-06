import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { useForm } from '../../Hooks/useForm';
import './style.css'
import TodoList from './TodoList';

const init = () => {
    
  return JSON.parse(localStorage.getItem('todos')) ||[];
};

const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);
 
    const [{description}, hanledInputChange, reset] = useForm({
      description: ''
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleDelete = (todoId) => {
      console.log(todoId)

      const action = {
        type: 'delete',
        playload: todoId
      }

      dispatch(action);
    }

    const handleToggle = (todoId) => {

      dispatch({
          type: 'toggle',
          playload: todoId
      })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(description.trim().length <= 10){
          alert('Debe digitar una Opcion Valida');
           return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done:false
        }

        const action = {
            type: 'add',
            playload: newTodo
        }

        dispatch(action);
        reset();
    }

    return (
      <div>
        <hr />
        <h1> Ejemplo del componente useReducer !!!</h1>
        <h5> Tareas a Realizar con Prioridad: ({todos.length})</h5>

        <div className="row">
          <div className="col-7">
           <TodoList 
             todos = {todos}
             handleToggle = {handleToggle}
             handleDelete = {handleDelete}
           />
          </div>

          <div className="col-5">
            <h4> Agregar Item.</h4>
            <hr />

            <form onSubmit={handleSubmit}>
                <input 
                    type= "text"
                    name= "description"
                    className="form-control"
                    placeholder= "Ingresar item!!!"
                    autoComplete= "off"
                    value= {description}
                    onChange= {hanledInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-outline-dark mt-1 btn-block"> Agregar </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default TodoApp
