import React from 'react'
import {Router, createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JonPage';
import JobPage from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>} />
      <Route path='/jobs' element={<JobsPage/>} />
      <Route path='/add-job' element={<AddJobPage/>} />
      <Route path='/jobs/:id' element={<JobPage/>} />
      <Route path='*' element={<NotFoundPagePage/>} />
    </Route>
  )
);


const App = () => {
  return <RouterProvider router = {router}/>
};

export default App;