
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import FaqPage from './pages/FaqPage';
import AboutPage from './pages/AboutPage';
function App() {
  return (
    <>
    <BrowserRouter>
   
   <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/faq' element={<FaqPage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
   </Routes>
    </BrowserRouter>    
    </>
  );
}

export default App;
