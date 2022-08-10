import { ADD_TODO,DELETE_TODO,COMPLETE_TODO,SET_TODO_FILTER } from "../ActionsTypes/todoActionTypes";

export const addTodo=(todo)=>{
    return{
     type:ADD_TODO,
     payload:todo
    }
}

export const deleteTodo=(id)=>{
    return{
     type:DELETE_TODO,
     payload:id
    }
}

export const uptadeTodo=(id,complete)=>{
    return{
     type:COMPLETE_TODO,
     payload:{id,complete}
    }
}

export const setTodoFilter=(filter)=>{
    return{
     type:SET_TODO_FILTER,
     payload:filter
    }
}