import "./mini-book.css";
import React, { useEffect } from "react";

const Book = (book) => {
    const imageSrc = `https://newpage-backend-t8r6.onrender.com/${book.imagePath}`
    return(
        <section id="mini-book" class="one">
            <img id="profile-image" src={imageSrc} alt={book.title}></img>
            <h5>{book.title}</h5>
        </section>
    )
};

export default Book;