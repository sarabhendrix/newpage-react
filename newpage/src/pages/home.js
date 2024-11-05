import '../App.js';
import '../styles/home.css'
import Review from '../components/Review.js';

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
    </div>
  );
}

export default App;