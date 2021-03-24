import React, { useState, useEffect } from "react";
import M from "materialize-css";
import '../styles/stylesApp.css';
import { connect } from 'react-redux';
import { addBook } from '../redux/actions';

function Modal ({addBook}) {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(1.0);
    const [category, setCategory] = useState("");

    const onSubmitHandler = (event) => {
        event.preventDefault();
     
        let book = {
            name: name,
            price: price,
            category: category
        };

        if (book) {
          addBook(book);
        } else {
            console.log("There is no book");
        }
    }

  
     useEffect(() => {
         const modalEnvoked = document.querySelectorAll('.modal');
            const options = {
                onOpenStart: null,
                onOpenEnd: null,
                onCloseStart: null,
                onCloseEnd: null,
                inDuration: 250,
                outDuration: 250,
                opacity: 0.5,
                dismissible: false,
                startingTop: "4%",
                endingTop: "10%"
            };
            M.Modal.init(modalEnvoked, options);
       }, []);
    
   
        return (
          <div className="container">
            <div className="row">
                <a className="waves-effect waves-green btn-large modal-trigger" data-target="modal1">Add Book</a>
            </div>

            <div id="modal1" className="modal modal-form">
              <div className="modal-content">
                <h4>Add Book</h4>
                <div className="modal-form-row">
                                <label>Name</label>
                                <input type="text" name="name" className="form-control validate" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                    <div className="modal-form-row">
                                <label>Price</label>
                                <input type="number" name="price" className="form-control validate" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} /> 
                    </div>
                    <div className="modal-form-row">
                                <label>Category</label>
                                <input type="text" name="category" className="form-control validate" value={category} onChange={(e) => setCategory(e.target.value)} />
                    </div>
              </div> 
                     <div className="modal-footer">
                                <a type="submit" onClick={onSubmitHandler} className="modal-close waves-effect waves-green btn-large">Submit</a>
              </div>
           
            </div>
        </div>
        );
      }
    
      
    
 export default connect(null, { addBook })(Modal);

    