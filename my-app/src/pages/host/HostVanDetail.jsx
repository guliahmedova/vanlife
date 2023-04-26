import { useParams, NavLink, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import HostVanPricing from "./HostVanPricing";
import HostVanPhotos from "./HostVanPhotos";

const HostVanDetail = () => {
  const { id } = useParams();
  const [vanData, setVanData] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then(res => res.json())
      .then(data => setVanData(data?.vans))
  }, []);

  return (
    <div className="host-van-detail">
      <Link
        to=".."
        relative="path"
        className="back-button"
      >&larr; <span>Back to all vans</span></Link>
      {vanData ?
        <div className="container">
          <div className="host-van-detail-card">
            <img src={vanData.imageUrl} alt="" />
            <div className="vancontent">
              <div className={`van-type ${vanData.type} selected`}>{vanData.type}</div>
              <h1>{vanData.name}</h1>
              <h2><span>${vanData.price}</span><span>/day</span></h2>
            </div>
          </div>
        </div> : <div className="loading">Loading...</div>
      }

      <nav className="host-van-detail-navbar">
        <NavLink end className={({ isActive }) => isActive ? "linkActive" : ""} to='.' >Details</NavLink>
        <NavLink className={({ isActive }) => isActive ? "linkActive" : ""} to="pricing">Pricing</NavLink>
        <NavLink className={({ isActive }) => isActive ? "linkActive" : ""} to="photos">Photos</NavLink>
      </nav>

      <Outlet context={{ vanData }} />

    </div>
  )
}

export default HostVanDetail