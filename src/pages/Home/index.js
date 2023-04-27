import React, { useState } from 'react';
import BlogList from '../../components/home/Bloglist';
import Header from '../../components/home/header';
import SearchBar from '../../components/home/search bar';
import { blogList } from '../../config/data';
import EmptyList from '../../components/common/EmptyList';

const Home = () => {
  const [blogs, setBlogs] = useState(blogList)
  const [searchKey, setSearchKey] = useState('')

   const handleSearchSubmit=event=>{
    event.preventDefault()
    handleSearchResults()
   }

   const handleSearchResults=()=>{
    const allBlogs=blogList;
    const filteredBlogs=allBlogs.filter((blog)=>blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    )
    setBlogs(filteredBlogs)

   }
   const handleClearSearch=()=> {
    setBlogs(blogList)
    setSearchKey('')

  }
  
  
  
   return (
    <div>
    <Header />

    <SearchBar 
    value={searchKey} 
    clearSearch={handleClearSearch}
    formSubmit={handleSearchSubmit} 
    handleSearchKey={(e) => setSearchKey(e.target.value)}  />

    {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
      
    </div>
  );
};

export default Home;
