import "./Review.css";
import pfp from "../images/profile-image.jpg"

function Review() {
    return(
        <section id="main-feed">
            <section id="review" className="one">
                <section id="review-head">
                    <img id="profile-image" src={pfp} alt="profile"></img>
                    <h4>Jane Doe reviewed&nbsp;Hera by Jennifer Saint</h4>
                </section>
                <p>I really really loved this book! It was such a great look at Greek mythology. Everyone should read it!</p>
            </section>
        </section>

    );
};

export default Review;