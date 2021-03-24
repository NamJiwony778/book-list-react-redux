import { ADD_BOOK, DELETE_BOOK } from '../types';


// const initialState = {booksArray: [{id: 0, name: 'Lord of the flies', price: 12.00, category: 'dystopian'}]};
const initialState = {booksArray: []};

function nextBookId(booksArray) {
    const maxId = booksArray.reduce((maxId, booksArray) => Math.max(booksArray.id, maxId), -1)
    return maxId + 1
}


export default function(state = initialState, action) {
    console.log("Book state = " + JSON.stringify(action.type));
    switch(action.type) {
        case ADD_BOOK: 
            console.log("Book in reducer " + JSON.stringify([ ...state.booksArray, {id: nextBookId(state.booksArray),
            name: action.payload.name, price: action.payload.price, category: action.payload.category}]  ));
            console.log("Book inbnm,, " + JSON.stringify(...state.booksArray));
          
            return {
                ...state, 
                booksArray: [ ...state.booksArray, {id: nextBookId(state.booksArray),
                name: action.payload.name, price: action.payload.price, category: action.payload.category}]  }
            
        case DELETE_BOOK:
            console.log('3 '+ action.type);
            let books =  ([ ...state.booksArray])
            let newBooksArr = books.filter(book => book !== action.payload);
          console.log("newBooksArr " + JSON.stringify(newBooksArr));
            return {
                 ...state, 
                 booksArray: newBooksArr
            }

             default: 
            return state;
    }
}