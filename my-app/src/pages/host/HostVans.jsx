import { useEffect, useState } from "react";
import HostVanCard from '../../components/HostVanCard';
import '../../server';

const HostVans = () => {
    const [vansData, setVansData] = useState([]);

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVansData(data?.vans))
    }, []);

    const vanCards = vansData.slice(0, 3).map((van) => {
        return <HostVanCard key={van.id} {...van} />
    })

    return (
        <div className="host-vans">
            <div className="container">
                <h1>Your listed vans</h1>
                {vanCards}
            </div>
        </div>
    )
}

export default HostVans