import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import Modal from "./modal";
import { connect, useDispatch } from "react-redux";
import '../styles/stylesApp.css';
import  { deleteBook }  from '../redux/actions';


let array = [];

function BookList (booksList) {
  array = booksList.booklist.booksArray;
  console.log("books in booksList component:  " + JSON.stringify(array));
  const dispatch = useDispatch();

function removeBook (id) {
  

   console.log( "ID " + id)
  let selectedBook;
  array.some(function(obj) {
    if (obj.id === id) {
      selectedBook = obj;
    }
  })
 
  console.log("book to delete " + JSON.stringify(selectedBook))


  if (selectedBook) {
    dispatch(deleteBook(selectedBook))
  } else {
      console.log("There is no book");
  }

}

    return (
        <div>
          <Modal />

          <table className="centered highlight">
            <thead>
              <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Manage</th>
              </tr>
            </thead>
            <tbody>
              {array && array.length ? array.map((item) =>  {
              return (<tr key={`booksList-${item.id}`}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td><a className="waves-effect  waves-light btn-small" id={item.id} onClick={<Modal/>}>Update</a> 
                <div className="divider"/>
                <a className="waves-effect red waves-light btn-small" id={item.id} onClick={(e) => e = removeBook(item.id)}>Delete</a></td>
                </tr>);
              })
              : "No books, yay!"}
            </tbody>
         </table>
        </div>
    );
  }

  const mapStateToProps = (state) => {
    const  booksList  = state;
    return  booksList;
  }
  
  const mapDispatchToProps = {
     deleteBook
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
