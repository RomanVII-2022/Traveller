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
import { AddBlog } from './components/AddBlog';
import React, { useState, useEffect } from 'react';
import { getCategories, getBlogs, addBlog } from './services/ApiServices';

function App() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
    .then(res => {
      setCategories(res)
    })
  }, [])

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    getBlogs()
    .then(res => {
      setBlogs(res)
    })
  }, [])

  const handleAddBlogSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.category.value)
    console.log(e.target.title.value)
    console.log(e.target.description.value)
    console.log(e.target.subtitle.value)
    console.log(e.target.subdescription.value)
    console.log(e.target.snippet.value)
    console.log(e.target.slug.value)
    console.log(e.target.tag.value)
    console.log(e.target.author.value)
    console.log(e.target.image1.value)
    console.log(e.target.image2.value)
    addBlog(e.target)
    .then(res => {
      setBlogs(res)
    })
  }

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
          <Route path='add-blog' element={<AddBlog categories = {categories} handleAddBlogSubmit = {handleAddBlogSubmit} />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
