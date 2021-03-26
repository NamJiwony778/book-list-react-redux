import { ADD_BOOK, DELETE_BOOK, UPDATE_BOOK } from '../types';


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
    
        case UPDATE_BOOK: 
        const index = action.payload.id;
        console.log('action.payload '+ JSON.stringify(action.payload));
        let booksArr =  ([ ...state.booksArray]);
        console.log('booksArr '+ JSON.stringify(booksArr));
        if (action.payload.name !== '') {
            booksArr[index].name = action.payload.name

        } else {
            booksArr[index].name =  booksArr[index].name
        }
        if (action.payload.price > 0 ) {
            booksArr[index].price = action.payload.price

        } else {
            booksArr[index].price = booksArr[index].price
        }
        if (action.payload.category !== '') {
            booksArr[index].category = action.payload.category

        } else {
            booksArr[index].category = booksArr[index].category
        }
             return {
                ...state,
                booksArray: booksArr }    
            
        case DELETE_BOOK:
            let books =  ([ ...state.booksArray])
            let newBooksArr = books.filter(book => book !== action.payload);
            return {
                 ...state, 
                 booksArray: newBooksArr
            }

             default: 
            return state;
    }
}