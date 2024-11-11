import React, { useState, useEffect } from "react";
import axios from "axios";
import "./mini-book-section.css";
import Book from "../components/mini-book";

function Section() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        (async () => {
          const response = await axios.get(
            "https://newpage-backend-t8r6.onrender.com/api/books"
          );
          console.log(response.data)
          setBooks(response.data);
          console.log(books);
        })();
      }, []);
      
    return(
        <section id="results" className="two">
             {books.map((book) => (
                <Book
                    key={book.id}
                    title={book.title}
                    imagePath={book.imagePath}
                />
            ))}
        </section>
    );
}

export default Section;