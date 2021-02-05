const INCREMENT = 'increment';
const DECREMENT = 'decrement';

export const increment = (value) => ({
    type: INCREMENT,
    value: value,
});

export const decrement = () => ({
    type: DECREMENT
});


const initialState = {
    count: 0,
    name: "",
    id: "0",
}


export default (state = initialState, action) => {
    switch(action.type){
        case INCREMENT:
            return { ...state, count: state.count + action.value};
        case DECREMENT:
            return { ...state, count: state.count - 1};
        default: 
            return state;

    };
};