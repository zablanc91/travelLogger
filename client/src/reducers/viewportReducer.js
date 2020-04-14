//reducer to change state of viewport for our Mapbox

//default: San Diego, California
const defaultViewport = {
    latitude: 32.7157,
    longitude: -117.1611,
    width: '100%',
    height: '80vh',
    zoom: 5
};

export default function(state = defaultViewport, action){
    switch(action.type){
        case 'CHANGE_VIEWPORT':
            return action.payload;
        default:
            return state;
    }
};