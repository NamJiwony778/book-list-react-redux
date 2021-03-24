import { combineReducers } from "redux";
import booklist from './bookslist.reducer';

const rootReducer = combineReducers({
    booklist
});

export default rootReducer;