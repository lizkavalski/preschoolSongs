import React from 'react';
import Header from './components/header';
import Categories from './components/categories'
import CurrentCategory from './components/current-category';
import Songs from './components/songs'



function App(props) {
  return (
  <>
  <Header/>
  <main>
    <Categories/>
    <CurrentCategory/>
    <Songs/>
  </main>
  </>
  )
};

export default App;
