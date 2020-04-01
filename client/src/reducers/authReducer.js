//reducer used to handle user login state

export default function(state = null, action){
    switch(action.type){
        //if user is logged return payload, false if not
        case 'FETCH_USER':
            return action.payload || false;
        //initially reducer has no clue of state, so return null
        default:
            return state;
    }
};