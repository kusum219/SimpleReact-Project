import { useState } from "react"
import './App.css'


function List(){
    let [item, setNewItem] = useState("");
    let [toDos, setNewTodos] = useState([]);

    function itemVal(event){
        setNewItem(event.target.value);
    }
    function update(event){
        event.preventDefault();
        
        if(item !== ""){ 
          setNewTodos(prevtodos =>{
            return [...prevtodos, 
                {id: crypto.randomUUID(), title: item,
                 completed: false }]})
        }
         setNewItem("")
    }

 
    function deleteItem(id){
        setNewTodos(prevtodos => {
            return prevtodos.filter(todo => todo.id !== id)
        })
    }

    return(
    <div className="todo">
    <form onSubmit={update}>
    <div className="todo-header">
        <h2>Todo Lists</h2>
        <input type="text" value={item} onChange={itemVal}/>
        <button>Add</button>
    </div>
    </form>
    {toDos.length === 0 && "Nothing to do"}
    <ul className="list">
    {toDos.map(todo => {
        return(
            <li key={todo.id}>
            <label>

        {todo.title}
            </label>
            <button onClick={()=>deleteItem(todo.id)} checked={todo.completed}>Delete</button>
        </li>
        )
    })}
    </ul>
    </div>
)

}
export default List