import React from 'react';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ToDO({
    todo,
    toggleComplete,
    handleDelete,
    handleEdit
}) {
    const[newTitle, setnewTitle]=React.useState(todo.title);
    
    const handleChange=(e) =>{
        if(todo.complete ===true){
            setnewTitle(todo.title);
        }
        else{
            todo.title="";
            setnewTitle=(e.target.value);
        }
    };
    return(
        <div className='todo'>
        <input 
        style={{textDecoration: todo.completed && "line-through"}}
        type="text"
        value={todo.title === ""? newTitle : todo.title}
        className="list"
        onChange={handleChange}
        />
        <div>
            <button
            className='button-complete'
            onClick={() => toggleComplete(todo)}
            >
             <CheckCircleIcon id="i" />       
            </button>

            <button
                className='button-edit'
                onClick={()=> handleEdit(todo,newTitle)}
                >
                    <EditIcon id="i" />
            </button>

            <button
                className='button-delete'
                onClick={()=> handleDelete(todo.id)}
                >
                    <DeleteIcon id="i" />
            </button>

        </div>
        </div>


    )
}