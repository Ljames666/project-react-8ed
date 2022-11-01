import { combineReducers } from '@reduxjs/toolkit';
import task from './tasksSlice';

const createReducer = (asyncReducers) => (state, action) => {
    const combineReducer = combineReducers({
        task,

        ...asyncReducers,
    });

    return combineReducer(state, action);
};

export default createReducer;
