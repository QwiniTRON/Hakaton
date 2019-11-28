export default function(state = [], action){
    if(action.type === "SET_USER"){
        return [action.payload];
    }
    if(action.type === "CLEAR_USER"){
        return [];
    }
    return state;
}