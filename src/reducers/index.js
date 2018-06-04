import {combineReducers} from 'redux';
import BooksReducers from './booksReducers';
import ActiveBookReducer from './activeBookReducer';


const rootReducer = combineReducers({
    books: BooksReducers,
    activeBook: ActiveBookReducer
});

export default rootReducer;
