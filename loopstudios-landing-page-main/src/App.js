import Cards from './components/cards/Cards';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Content from './components/content/Content';
import CardsDesktop from './components/cards/CardsDesktop';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Cards />
      <CardsDesktop />
      <Footer />
    </div>
  );
}

export default App;
