import './App.css';
import Intro from './components/Intro';
import Statistics from './components/Statistics';
import BoostLinksToday from './components/BoostLinksToday';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import ShortenLink from './components/ShortenLink';

function App() {

  return (
    <div>
      <NavigationBar />
      <Intro />
      {/* <ShortenLink /> */}
      <Statistics />
      <BoostLinksToday />
      <Footer />
    </div>
  );
}

export default App;
