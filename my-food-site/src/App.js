import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/navbar/navbar';
import HeroSection from './components/heroSection/heroSection';
import MostPopularDishes from './components/mostPopularDishes/MostPopularDishes';
import ReservationForm from './components/ReservationForm/ReservationForm';
import Footer from './components/footer/footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas, far);

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HeroSection />
      <MostPopularDishes />
      <ReservationForm />
      <Footer />
    </div>
  );
}

export default App;
