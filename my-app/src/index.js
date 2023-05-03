import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans, { loader } from './pages/Vans';
import VanDetail from './pages/VanDetail';
import Layout from './components/Layout';
import Host from './pages/host/Host';
import Income from './pages/host/Income';
import Reviews from './pages/host/Reviews';
import HostLayout from './components/HostLayout';
import HostVans from './pages/host/HostVans';
import HostVanDetail from './pages/host/HostVanDetail';
import HostVanPhotos from './pages/host/HostVanPhotos';
import HostVanPricing from './pages/host/HostVanPricing';
import HostVanInfo from './pages/host/HostVanInfo';
import NotFound from './pages/NotFound';
import Error from './pages/Error';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} loader={loader}>

    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='vans' element={<Vans />} errorElement={<Error />} />
    <Route path='vans/:id' element={<VanDetail />} />

    <Route path='host' element={<HostLayout />}>
      <Route index element={<Host />} />
      <Route path='income' element={<Income />} />
      <Route path='reviews' element={<Reviews />} />
      <Route path='vans' element={<HostVans />} />

      <Route path='vans/:id' element={<HostVanDetail />} >
        <Route index element={<HostVanInfo />} />
        <Route path='pricing' element={<HostVanPricing />} />
        <Route path='photos' element={<HostVanPhotos />} />
      </Route>
    </Route>

    <Route path="*" element={<NotFound />} />
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);