import "./mini-book.css";
import React, { useState } from "react";
import EditDialog from "./edit-dialog";
import DeleteDialog from "./delete-dialog";


const Book = (props) => {
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [book, setBook] = useState(props);
    const [showBook, setShowBook] = useState(true);

    const imageSrc = `https://newpage-backend-t8r6.onrender.com/${book.imagePath}`
    //const imageSrc = `http://localhost:3001/${book.imagePath}`
    
    const openEditDialog = () => {
        setShowEditDialog(true);
        console.log(book);
    };

    const closeEditDialog = () => {
        setShowEditDialog(false);
    };

    const openDeleteDialog = () => {
        setShowDeleteDialog(true);
    };

    const closeDeleteDialog = () => {
        setShowDeleteDialog(false);
    };

    const editBook = (newBook) => {
        setBook(newBook);
    };

    const hideBook = (newBook) => {
        setShowBook(false);
    };
    return(
        <>
            {showBook ? (
            <div>
                {showDeleteDialog ? (
                    <DeleteDialog 
                        closeDialog={closeDeleteDialog}
                        _id={book._id}
                        name={book.title}
                        hideBook={hideBook}
                    />
                ) : (
                    ""
                )}
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
                            <a href="#" onClick={openDeleteDialog}>&#x2715;</a>
                        </section>
                    </section>
                </section>
            </div>
            ) : (
                ""
            )}
        </>
    )
};

export default Book;