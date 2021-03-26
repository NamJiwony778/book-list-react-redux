import React,  { useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import Modal from "./modal";
import { connect, useDispatch } from "react-redux";
import '../styles/stylesApp.css';
import  { deleteBook }  from '../redux/actions';

function BookList (booksList) {
  let array = booksList.booklist.booksArray;
  const dispatch = useDispatch();

  let selectedBook
  let updatedBook;

  const [nameValue, setNameValue] = useState();
  const [priceValue, setPriceValue] = useState();
  const [categoryValue, setCategoryValue] = useState();
  const [idValue, setIdValue] = useState();

  function  getChosenToUpdateBook(id) {
    array.some(function(obj) {
     if (obj.id === id) {
       updatedBook = obj;
     }
   })
   console.log("update" + JSON.stringify(updatedBook));
   
   setNameValue(updatedBook.name);
   setPriceValue(updatedBook.price);
   setCategoryValue(updatedBook.category);
   setIdValue(updatedBook.id);
   
 
   return updatedBook;
 }



  function removeBook (id) {
    array.some(function(obj) {
      if (obj.id === id) {
        selectedBook = obj;
      }
    })
  
    if (selectedBook) {
      dispatch(deleteBook(selectedBook))
    } else {
        console.log("There is no book");
    }

  }

    return (
        <div>
          <Modal idValue={idValue} nameValue={nameValue} priceValue={priceValue} categoryValue={categoryValue}/>
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
                <td><a className="waves-effect waves-light btn-small modal-trigger" onClick={(e) => e = getChosenToUpdateBook(item.id)}  id={item.id} data-target="modal2">Update</a> 
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
