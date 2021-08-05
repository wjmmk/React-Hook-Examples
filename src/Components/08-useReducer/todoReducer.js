

export const todoReducer = ( state = [], action) => {

    switch (action.type) {
        
        case 'add':

            return [...state, action.playload]
    
        case 'delete':

            return state.filter( todo => todo.id !== action.playload);   
            
        case 'toggle':
            
            return state.map( todo => 
                (todo.id === action.playload)
                ? {...todo, done: !todo.done}
                : todo
            )

        case 'toggle-old':
            
            return state.map( todo => {
                if(todo.id === action.playload){
                    return {
                        ...todo,
                        done: !todo.done
                    } 
                 } else {
                        return todo;
                    }
            })

        default:
            
           return state;
    }
}