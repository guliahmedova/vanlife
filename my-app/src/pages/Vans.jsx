import VanCard from '../components/VanCard';
import { useEffect, useState } from "react";
import '../server';
import { useSearchParams } from 'react-router-dom';

const Vans = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [vansData, setVansData] = useState([]);

    const typeFilter = searchParams.get('type');

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVansData(data?.vans))
    }, []);

    const vanCards = vansData.map((van) => {
        return <VanCard key={van.id} {...van} />
    });

    const displayedVans = typeFilter ? vanCards.filter(van => van.type === typeFilter) : vansData;
    
    return (
        <div className="vans">
            <section className="vans-top">
                <div className="container">
                    <h1 className="vans-title">Explore our van options</h1>

                    <div className="filters">
                        <button onClick={() => setSearchParams("?type=simple")} className="filter-btn">Simple</button>
                        <button onClick={() => setSearchParams("?type=luxury")} className="filter-btn">Luxury</button>
                        <button onClick={() => setSearchParams("?type=rugged")} className="filter-btn">Rugged</button>
                        <button onClick={() => setSearchParams(".")} className="filter-clear-btn">Clear filters</button>
                    </div>
                </div>
            </section>

            <section className="main">
                <div className="cards">
                    {
                        vanCards ? vanCards : <div className="loading">Loading...</div>
                    }
                </div>
            </section>

        </div>
    )
}

export default Vans