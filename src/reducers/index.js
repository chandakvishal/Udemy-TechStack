import {combineReducers} from 'redux';
import LibrayReducer from './LibraryReducer';

export default combineReducers({
    libraries: LibrayReducer
});
