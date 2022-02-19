import Footer from "./components/Footer";
import LandingContent from "./components/LandingContent";
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import FunFacts from "./pages/FunFacts";
import About from "./pages/About";
import FunfactContextProvider from "./contexts/FunfactContextProvider";


function App() {
  return (
    <div className="App">
          <BrowserRouter>
          <FunfactContextProvider>
          <Navbar/>
              <Routes>
                <Route path="/" element={<LandingContent/>}></Route>
                <Route path="/funfacts" element={<FunFacts/>}></Route>
                <Route path="/about" element={<About/>}></Route>
              </Routes>
          <Footer/>
          </FunfactContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
