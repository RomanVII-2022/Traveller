import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { TopBar } from './components/TopBar';
import { NavigationBar } from './components/NavigationBar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { About } from './components/About';
import { Services } from './components/Services';
import { TourPackages } from './components/TourPackages';
import { Contact } from './components/Contact';
import { Blogs } from './components/Blogs';
import { BlogDetail } from './components/BlogDetail';

function App() {

  return (
    <div>
      <Router>
        <TopBar />
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='about-us' element={<About />}></Route>
          <Route path='services' element={<Services/>}></Route> 
          <Route path='tour-packages' element={<TourPackages />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path = 'blogs' element = {<Blogs/>}></Route>
          <Route path = 'blog-details/:blogID' element={<BlogDetail />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
