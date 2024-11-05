import "./discussion-post.css";
import cover from "../images/Hera.jpg";

function Post() {
    return(
        <section id="discussion-post" className="columns">
            <div id="book-cover">
                <img src={cover} alt="book-cover"></img>
            </div>
            <div id="synopsis">
                <h3>Hera</h3>
                <p>Hera, immortal goddess and daughter of the ancient Titan Cronos, helped her brother Zeus to overthrow their tyrannical father so that they could rule the world. But, as they establish their reign on Mount Olympus, Hera suspects that Zeus might be just as ruthless and cruel as their father was, and she begins to question her role at his side. She was born to rule, but does that mean perpetuating a cycle of violence and cruelty that has existed since the dawn of time? Will assuming her power mean that Hera loses herself, or can she find a way to forge a better world?</p>
            </div>
        </section>
    );
}

export default Post;