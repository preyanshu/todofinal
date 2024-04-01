import { createStore } from 'redux';
import taskReducer from '../reducers/taskReducer';

export type RootState = ReturnType<typeof taskReducer>;

const store = createStore(taskReducer);

export default store;
