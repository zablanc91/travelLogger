//used for the Mapbox popup when clicking on log marker to display popup

export default function(state = null, action) {
    switch(action.type){
        case 'SET_SELECTED_LOG':
            return action.payload;
        default:
            return state;
    }
}