import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';
import VanDetail from './pages/VanDetail';
import Layout from './components/Layout';
import Host from './pages/host/Host';
import Income from './pages/host/Income';
import Reviews from './pages/host/Reviews';
import HostLayout from './components/HostLayout';
import HostVans from './pages/host/HostVans';
import HostVanDetail from './pages/host/HostVanDetail';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>

          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetail />} />

          <Route path='host' element={<HostLayout />}>
            <Route index element={<Host />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='vans' element={<HostVans />} />
            <Route path='vans/:id' element={<HostVanDetail />} />
          </Route>

        </Route>
      </Routes>
    </>
  );
}

export default App;