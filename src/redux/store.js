import { createStore } from "redux";
import { todosreducer } from "./todos/reducer";
export const store = createStore(todosreducer)

console.log(store.getState())