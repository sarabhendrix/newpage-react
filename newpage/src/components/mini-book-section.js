import React, { useState, useEffect } from "react";
import axios from "axios";
import "./mini-book-section.css";
import Book from "../components/mini-book";

function Section() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        (async () => {
          const response = await axios.get(
            //"http://localhost:3001/api/books"
            "https://newpage-backend-t8r6.onrender.com/api/books"
          );
          setBooks(response.data);
        })();
      }, []);
      
    return(
        <section id="results" class="two">
             {books.map((book) => (
                <Book
                    key={book._id}
                    _id={book._id}
                    title={book.title}
                    description={book.description}
                    genre={book.genre}
                    rating={book.rating}
                    imagePath={book.imagePath}
                />
            ))}
        </section>
    );
}

export default Section;