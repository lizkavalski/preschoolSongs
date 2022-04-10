import './App.css';
import Header from './component/header/header';
import Categories from './component/categories/categories';
import Footer from './component/footer/footer';
import Songs from './component/songs/songs';
import ViewVideo from './component/video/video';
import {  Routes, Route  } from 'react-router-dom';
function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<Categories/>}/>
          <Route path='/:category' element={<Songs/>}/>
          <Route path='/:category/:title' element={<ViewVideo/>}/>
        </Routes>
      <Footer/>
    </>
    
  );
}

export default App;
