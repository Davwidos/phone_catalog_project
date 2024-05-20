import './App.scss';
import './scripts/main';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

export const App = () => (
  <div className="App">
    <Header />
    <Footer />
  </div>
);
