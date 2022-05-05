import { useEffect, useState } from "react"
import {  useDispatch, useSelector } from "react-redux"
import { addTodo, addTodoLoading, addTodoSuccess, getTodoLoading, getTodoSuccess } from "../redux/todos/action"
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";

export const Todo = () => {
    const {loading, data, error} = useSelector((store) => store)
    const distpatch = useDispatch()
    const [text, setText] = useState('')
  //console.log(data)

    useEffect(() => {
      getTodos()
    }, [])

    const getTodos = () => {
        distpatch(getTodoLoading())
        axios.get("http://localhost:3001/users").then(({data}) => {
       distpatch(getTodoSuccess(data))
   // console.log(data)
       
        })
    }

   


    return loading ? "Loading...": (
        <div>
            <input type="text"  onChange={e => setText(e.target.value)}/>
            <button onClick={() => {
                // distpatch(addTodo({id:Date.now(), title:text, status:false}))
                distpatch(addTodoLoading())
                axios.post("http://localhost:3001/users", { 
                     title:text, 
                     status:false,
            })
                .then((data) => {
                     distpatch(addTodoSuccess())
                     getTodos()
                }).catch(() => {
                    
                })
                   
            }}>Add todo</button>
            <div>
             {/* {
                 
                  data.map((data) => (
                     <div key = {data.id}>{data.title}</div>
                 ))
             } */}

           {data.map((elem) => <p key = {elem.id}> 
             <Link to={`/todo/${elem.id}`}>
             {elem.id}. {elem.title} </Link> 
             </p>

             
             )} 
            </div>
        </div>
    )
}