import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

function App() {

  const cards = [{ points: 1, nationality: 'one' }, { points: 2, nationality: 'two' }]

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cards-list'>
        <h1>List one</h1>
        {cards.map(card => <Card {...card} />)}
      </section>
      <hr/>
      <section className='cards-list'>
        <h1>List two</h1>
        {cards.map(card => <Card nationality={card.nationality} points={card.points} />)}
      </section>
      
    </div>
  );
}

export default App;
