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
import { getCategories, getBlogs, addBlog, editBlog1 } from './services/ApiServices';
import { EditBlog } from './components/EditBlog';

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
    addBlog(e.target)
    .then(res => {
      setBlogs(res)
    })
  }

  const [editBlog, setEditBlog] = useState([])
  
  const handleEditData = (blog) => {
    setEditBlog(blog)
  }

  const handleEditBlogSubmit = (id, e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    editBlog1(id, formData)
    .then(res=>{
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
          <Route path = 'blogs' element = {<Blogs handleEditData = {handleEditData} />}></Route>
          <Route path = 'blog-details/:blogID' element={<BlogDetail />}></Route>
          <Route path='add-blog' element={<AddBlog categories = {categories} 
          handleAddBlogSubmit = {handleAddBlogSubmit} />}></Route>
          <Route path='edit-blog' element={<EditBlog categories = {categories} 
          editBlog = {editBlog} handleEditBlogSubmit = {handleEditBlogSubmit} />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
