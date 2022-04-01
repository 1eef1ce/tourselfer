import { createStore } from 'redux';
import reducerManager from "./reducer";

const store = createStore(reducerManager, {
    notifications: []
});

export default store;