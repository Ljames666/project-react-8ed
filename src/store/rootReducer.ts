import { combineReducers } from '@reduxjs/toolkit';
import task from './tasksSlice';
import config from './configSlice';
import user from './userSlice';

const reducer = {
    config,
    user,
    task,
};

const combineReducer = combineReducers({
    ...reducer,
});

export type StateApp = ReturnType<typeof combineReducer>;

export default combineReducer;
