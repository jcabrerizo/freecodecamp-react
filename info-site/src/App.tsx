import Header from './components/Header'
import Footer from './components/Footer'

const Page = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

const Content = () => {
  return (
    <span>
      <h1>React 101.1</h1>
      <ol>
        <li>un</li>
        <li>dos</li>
        <li>tres</li>
        <li>14</li>
      </ol>
    </span>
  )
}


function App() {
  return Page();
}

export default App;
