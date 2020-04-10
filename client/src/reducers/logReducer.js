//reducer to get logs for use in front end

export default function(state = [], action){
    switch(action.type){
        case 'FETCH_LOGS': 
            return action.payload;
        default:
            return state;
    }
};