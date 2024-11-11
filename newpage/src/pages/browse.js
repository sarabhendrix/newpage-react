import "../styles/browse.css";
import Section from "../components/book-section";
import filter from "../images/filter";


const Browse = () => {
    return (
        <section id="browse-content" className="columns">
            <div>
                <section id="search-and-suggest" className="two">
                    <input type="text" id="search-input" placeholder="Search here..."></input>
                    <section id="filters"><img id="filter" src={filter} alt="filters"></img></section>
                </section>
                <Section />
            </div>
        </section>
    );
};

export default Browse;