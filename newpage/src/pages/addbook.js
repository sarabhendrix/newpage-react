import "../styles/addbook.css";
import React, { useState } from "react";

const AddBook = () => {
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState("");
    const [bookList, setBookList] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleImageChange = (event) => {
        const name = event.target.name;
        const value = event.target.files[0];
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const appendBook = (input) => {
        setBookList((bookList) => [...bookList, input]);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        //const response = await fetch("http://localhost:3001/api/books", {
          //method: "POST",
          //body: formData,
        //});
        const response = await fetch("https://newpage-backend-t8r6.onrender.com/api/books", {
            method: "POST",
            body: formData,
        });
    
        if (response.status === 200) {
          setResult("Book Successfully Added");
          event.target.reset(); 
          appendBook(await response.json());
          console.log(bookList);
        } else {
          console.log("Error adding book", response);
          setResult(response.message);
        }
    };

    return(
        <div>
            <form id="add-book-form" onSubmit={onSubmit}>
                <p>
                <label htmlFor="name">Title:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={inputs.name || ""}
                    onChange={handleChange}
                    required
                />
                </p>
                <p>
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={inputs.description || ""}
                        onChange={handleChange}
                        required
                        minLength="10"
                    />
                </p>
                <p>
                    <label htmlFor="genre">Genre</label>
                    <select name="genre" id="genre" value={inputs.genre || ""} onChange={handleChange}>
                        <option value="Mythology">Mythology</option>
                        <option value="Literary Fiction">Literary Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Horror">Horror</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Other">Other</option>
                    </select>
                </p>
                <section className="columns">
                    <p id="img-prev-section">
                    <img
                        id="img-prev"
                        src={
                            inputs.img != null ? URL.createObjectURL(inputs.img) : ""
                        }
                        alt=""
                    />
                    </p>
                    <p id="img-upload">
                    <label htmlFor="img">Upload Image:</label>
                    <input
                        type="file"
                        id="img"
                        name="img"
                        onChange={handleImageChange}
                        accept="image/*"
                    />
                    </p>
                </section>
                <p>
                    <label htmlFor="rating">Average Rating</label>
                    <input
                        type="number"
                        name="rating"
                        id="rating"
                        value={inputs.rating || ""}
                        onChange={handleChange}
                        required
                    />
                </p>
                <p>
                    <button type="submit">Add</button>
                </p>
                <p>{result}</p>
            </form>
        </div>
    );
};

export default AddBook;