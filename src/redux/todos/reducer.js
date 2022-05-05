import { ADD_TODO, ADD_TODO_LOADING, ADD_TODO_SUCCESS, GET_TODO_LOADING, GET_TODO_SUCCESS,   } from "./actiontype"

const init = {
    
    
        loading:false,
        error:false,
        data:[]
 
 
}

export const todosreducer = (store = init, {type, payload}) => {
    switch(type){
        // case INC_COUNT:
        //     return {...store, count:store.count + payload}
        //     case DEC_COUNT:
        //         return {...store, count:store.count - payload}
                //  case ADD_TODO:
                //      return {...store, todos:[...store.todos, payload]}
                
                case ADD_TODO_LOADING:
                    return {...store,  
                   //     ...store.todos,
                        loading:true,
                    }
                    case ADD_TODO_SUCCESS:
                        return {...store,  
                      //      ...store.todos,
                            loading:false,
                        }

                        case GET_TODO_LOADING:
                    return {...store,  
                        loading:true,
                    }
                    case GET_TODO_SUCCESS:
                        return {...store,  
                            loading:false,
                            data:payload,

                        }

                default:
                    return {...store}
    }
}