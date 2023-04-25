import React from 'react'
import { Link } from 'react-router-dom'

const HostVanCard = (props) => {
    return (
        <Link to={`/host/vans/${props.id}`} className='host-van-card'>
            <img src={props.imageUrl} alt="" />
            <div className='text'>
                <h3>{props.name}</h3>
                <h2><span>${props.price}</span> <span>/day</span></h2>
            </div>
        </Link>
    )
}

export default HostVanCard