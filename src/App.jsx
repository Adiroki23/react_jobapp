import React from 'react'
import Navbar from './components/Navbar';
import Hero from '/components/Hero';
import HomeCard from './components/HomeCards';
import JobListings from './components/JbListings';
import ViewAllJobs from './components/ViewAllJobs';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCard />
      <JobListings/>
      <ViewAllJobs/>
      
    </>
  );
};

export default App;