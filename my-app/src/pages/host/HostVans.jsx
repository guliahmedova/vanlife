import { useEffect, useState } from "react";
import HostVanCard from '../../components/HostVanCard';
import '../../server';

const HostVans = () => {
    const [vansData, setVansData] = useState([]);

    useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVansData(data.vans))
    }, [])

    const vanCards = vansData.map((van) => {
        return <HostVanCard key={van.id} {...van} />
    })

    return (
        <div className="host-vans">
            <div className="container">
                <h1>Your listed vans</h1>
                {vansData.length > 0 ? vanCards : <div className="loading">Loading...</div>}
            </div>
        </div>
    )
}

export default HostVans