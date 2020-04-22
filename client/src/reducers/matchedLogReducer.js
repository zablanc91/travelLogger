//for individual log pages

export default function(state = null, action) {
    switch(action.type){
        case 'GET_LOG_BY_SLUG':
            return action.payload;
        default:
            return state;
    }
}