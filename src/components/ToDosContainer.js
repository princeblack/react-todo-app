import React from 'react';
import ToDoItem from './ToDoItem';

function ToDosContainer() {
  const data =[
    {text: 'do your string', status: false, id:2465454},
    {text: 'be yourself', status: false, id:4714698469},
    {text: 'be a dog', status: false, id:248778454},
    {text: 'Explain something', status: false, id:2467855454},
  ]
  const todoItems = data.map(el =>{
    return <ToDoItem key={el.id}>{el.text}</ToDoItem>
  })
    return ( 
        data.length > 0 && (
          <div className="todo-container">
              <h5>TODOS</h5>
              {todoItems}
              <hr></hr>
          </div>
        )
      
    );
}
export default ToDosContainer;