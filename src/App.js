
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Vision from './Components/Vision';
import Loan from './Components/Loan';
import Investor from './Components/Investor';
import Who from './Components/Who';
import ScrollAwareHeader from './Components/ScrollAwareHeader';

function App() {
  

  return (
    <>
     
     <ScrollAwareHeader /> 
     <div className="content">
        <Home />
        <About />
        <Vision />
        <Loan />
        <Investor />
        <Who />
        <Footer />
      </div>
    </>
  );
}

export default App;
