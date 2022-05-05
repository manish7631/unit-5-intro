import { ADD_TODO, ADD_TODO_LOADING, ADD_TODO_SUCCESS,  GET_TODO_LOADING, GET_TODO_SUCCESS, DELETE_TODO } from "./actiontype";
 


export const addTodo = (payload) => ({
    type:ADD_TODO,
    payload,
})


export const addTodoLoading = () => {
return {
    type:ADD_TODO_LOADING,
}
}


export const addTodoSuccess = (payload) => {
    return {
        type:ADD_TODO_SUCCESS,
        payload,
    }
    }



    
export const getTodoLoading = () => {
    return {
        type:GET_TODO_LOADING,
    }
    }
    
    
    export const getTodoSuccess = (payload) => {
        return {
            type: GET_TODO_SUCCESS,
            payload,
        }
        }


        
export const deleteTodo = (data) => {
    return {
        type: DELETE_TODO,
        payload: data
    }
}