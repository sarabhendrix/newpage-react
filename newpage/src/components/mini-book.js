import "./mini-book.css";
import React, { useState } from "react";
import EditDialog from "./edit-dialog";


const Book = (props) => {
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [book, setBook] = useState(props);

    const imageSrc = `https://newpage-backend-t8r6.onrender.com/${book.imagePath}`
    //const imageSrc = `http://localhost:3001/${book.imagePath}`
    
    const openEditDialog = () => {
        setShowEditDialog(true);
        console.log(book);
    };

    const closeEditDialog = () => {
        setShowEditDialog(false);
    };

    const editBook = (newBook) => {
        setBook(newBook);
    };

    return(
        <div>
            {showEditDialog ? (
                <EditDialog 
                    closeDialog={closeEditDialog}
                    editBook={editBook}
                    _id={book._id}
                    name={book.title}
                    description={book.description}
                    imagePath={book.imagePath}
                    genre={book.genre}
                    rating={book.rating}
                />
            ) : (
                ""
            )}
            
            <section id="mini-book" className="one">
                <img id="profile-image" src={imageSrc} alt={book.title}></img>
                <section className="info">
                    <h5>{book.title}</h5>
                    <section id="change-buttons">
                        <a href="#" onClick={openEditDialog}>&#9998;</a>
                        <a href="#">&#x2715;</a>
                    </section>
                </section>
            </section>
        </div>
    )
};

export default Book;