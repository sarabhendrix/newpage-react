import "./book.css";
import React, { useEffect } from "react";

const Book = (book) => {
    const imageSrc = `https://newpage-backend-t8r6.onrender.com/${book.imagePath}`
    //const imageSrc = `http://localhost:3001/${book.imagePath}`
    return(
        <section id="small-book" className="one">
            <img id="profile-image" src={imageSrc} alt={book.title}></img>
            <h5>{book.title}</h5>
            <h5>{book.name}</h5>
        </section>
    )
};

export default Book;