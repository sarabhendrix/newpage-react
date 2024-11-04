import './App.css';
import Review from './components/Review.js';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
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
