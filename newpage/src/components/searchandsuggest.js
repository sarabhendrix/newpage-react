import "./searchandsuggest.css";

function Search() {
    return(
        <section id="search-and-suggest" className="two">
            <section id="search-bar">
                <input type="text" id="search-input" placeholder="Search here..."></input>
                <section id="bookshelves">
                    <ul>
                        <li>Want to Read</li>
                        <li>Read</li>
                        <li>DNF</li>
                        <li>My Favs</li>
                        <li>Romance</li>
                        <li>Books that feel like summer</li>
                        <li>Thrillers</li>
                        <li>Best Mysteries</li>
                    </ul>
                </section>
            </section>
        </section>
    );
}

export default Search;