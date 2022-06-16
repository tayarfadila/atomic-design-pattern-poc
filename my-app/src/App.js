import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Header from "./components/common/header";
import Footer from './components/common/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
