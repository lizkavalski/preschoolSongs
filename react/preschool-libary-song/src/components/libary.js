import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CurrentCategory from './current-category.js';
import Categories from './categories';
import Songs from './songs'
// import Video from './video'


const Library = props => {

  return (
  
      <section className="store">
        <Categories />
        <CurrentCategory />
        <Songs/>
      </section>
    );

}

export default Library;