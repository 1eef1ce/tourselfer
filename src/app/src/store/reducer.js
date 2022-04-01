import * as actions from './actionTypes';

let notifyLastId = 0;

const notifyReducer = (state = [], action) => {
    switch (action.type) {
        case actions.NOTIFY_ADD:
            return state.concat([{ 
                type: action.payload.type,
                title: action.payload.title,
                message: action.payload.message,
            }]);

        default:
            return state

        /*case 'ADD_ITEM':
            return state.concat([{ title: action.title }])
        case 'REMOVE_ITEM':
            return state.map((item, index) =>
                action.index === index
                    ? { title: item.title }
                    : item
      */
    }
}

const reducerManager = (state = {}, action) => {
    return {
        notifications: notifyReducer(state.notifications, action),
    }
}

export default reducerManager;
