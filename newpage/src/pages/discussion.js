import "../styles/discussion.css";
import Review from '../components/Review.js';
import Post from '../components/discussion-post.js';

const Discussion = () => {
    return (
        <section id="discuss-content" className="columns">
            <div>
                <section id="search-and-suggest" className="two">
                    <input type="text" id="search-input" placeholder="Search here..."></input>
                </section>
                <Post />
                <section id="discussion" className="columns">
                    <Review />
                    <Review />
                    <Review />
                    <section id="reply" className="one">
                        <input type="text" id="search-input" placeholder="Write a comment"></input>
                    </section>
                </section>
            </div>
        </section>
    );
};

export default Discussion;