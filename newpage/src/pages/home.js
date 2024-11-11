import '../App.js';
import '../styles/home.css'
import Review from '../components/Review.js';
import Contact from '../components/contact.js';

function App() {
  return (
    <div>
      <Review />
      <Review />
      <Review />
      <Review />
      <Review />
      <Review />
      <Review />
      <section id='more'>      
        <button id='load'>Load More</button>
      </section>
      <Contact />
    </div>
  );
}

export default App;