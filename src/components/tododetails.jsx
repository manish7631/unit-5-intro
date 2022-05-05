import axios from "axios"

import { useEffect, useState } from "react"
import { useParams, Navigate } from "react-router-dom"

export const Tododetails = () => {
    const {id} = useParams()
    const [todo,setTodo] =useState({})

    
    useEffect(() => {
        axios.delete(`http://localhost:3001/users/${id}`).then(({data}) => {
         setTodo(data)
         console.log(data)
        })
      }, [])
  return (
       <div>
           <h1>Id:-{todo.id}</h1>
           <h1>Title:-{todo.title}</h1>
           
       </div>
  )
}