import React, { useState } from "react";
import { db} from "../firebase";
import { collection, addDoc} from "firebase/firestore";

export default function AddToDo(){
    const [title, setTitle]=React.useState("");


    const handleSubmit=async(e) =>{
        e.preventDefault();
        if(title!==""){
            await addDoc(collection(db, "todos"),{
              title,
              completed: false,
            });
            setTitle("");
        }
    };
    return(
        <form onSubmit={handleSubmit}>
        <div className="input_container">
            <input
            type="text"
            placeholder="Enter ToDo.."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div className="btn_container">
            <button>ADD</button>
        </div>
        </form>
    );
}