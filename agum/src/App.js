import { Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Admin from './components/Dashboard/Admin';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Cards />
      <Body /> 
      <Footer />
      <Routes>
        <Route path = "/admin" element = {<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
