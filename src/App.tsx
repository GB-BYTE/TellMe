import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Articles from './components/Articles';
import Recent from './components/Recent';
import Newsletter from './components/Newsletter';
import AllPosts from './components/AllPosts';



function App() {
  return (
    <div className="">
       <Navbar/>
       <Hero/>
       <Articles/>
       <Recent></Recent>
       <Newsletter></Newsletter>
       <AllPosts></AllPosts>
       

    </div>
  );
}

export default App;
