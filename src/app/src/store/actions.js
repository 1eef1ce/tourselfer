import * as actions from './actionTypes';

export const addNotify = notify => ({
    type: actions.NOTIFY_ADD,
    payload: notify
});

export const removeNotify = id => ({
    type: actions.NOTIFY_REMOVE,
    payload: { id }
});