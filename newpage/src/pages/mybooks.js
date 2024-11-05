import "../styles/mybooks.css";
import Search from "../components/searchandsuggest";
import Section from "../components/mini-book-section";

const MyBooks = () => {
    return (
        <section id="library-content">
            <div class="columns">
                <Search />
                <Section />
            </div>
        </section>
    );
};

export default MyBooks;