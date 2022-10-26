import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const initialState = {
    counter: 0,
    users: []
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            let substractor = action.payload ? action.payload : 1
            return {
                ...state,
                counter: state.counter + substractor
            }
        case "DECREMENT":
            return {...state, counter: state.counter - 1 }
        case "SET_USERS":
            let data = action.payload ? action.payload : []
            return {...state, users: data}
        default:
            return state
    }
}

const store = createStore(counter, applyMiddleware(thunk, logger))

export default store