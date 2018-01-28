import { combineReducers } from 'redux';
import LibrayReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    libraries: LibrayReducer,
    selectedLibraryId: SelectionReducer
});
