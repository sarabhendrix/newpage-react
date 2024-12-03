import "../styles/dialog.css";
import React, { useState } from "react";

const DeleteBook = (props) => {
    const [inputs, setInputs] = useState({
        _id: props._id,
        name: props.name,
    });

    const [result, setResult] = useState("");

    const deleteBook = async() => {
      /*
      const response = await fetch(`http://localhost:3001/api/books/${props._id}`,
        {
        method:"DELETE",
        }
      );
      */
      const response = await fetch(`https://newpage-backend-t8r6.onrender.com/api/books/${props._id}`,
        {
        method:"DELETE",
        }
      );
      if(response.status === 200){
        setResult("Book successfully deleted");
        props.hideBook();
      } else {
        console.log("error deleting house", response);
        setResult(response.message);
      }
    };

    return (
        <div id="delete-dialog" className="w3-modal">
          <div className="w3-modal-content">
            <div className="w3-container">
              <span
                id="dialog-close"
                className="w3-button w3-display-topright"
                onClick={props.closeDialog}
              >
                &times;
              </span>
              <div id="delete-content">
                <h3>Are you sure you want to delete {props.name}</h3>
                <section>
                  <button onClick={deleteBook}>Yes</button>
                  <button onClick={props.closeDialog}>No</button>
                </section>
              </div>
            </div>
          </div>
        </div>
      );
};

export default DeleteBook;