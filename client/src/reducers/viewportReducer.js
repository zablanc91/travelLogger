//reducer to change state of viewport for our Mapbox

//default: Ottawa, Canada
const defaultViewport = {
    latitude: 45.4211,
    longitude: -75.6903,
    width: '100%',
    height: '80vh',
    zoom: 7
};

export default function(state = defaultViewport, action){
    switch(action.type){
        case 'CHANGE_VIEWPORT':
            return action.payload;
        default:
            return state;
    }
};