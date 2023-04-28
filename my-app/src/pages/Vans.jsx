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

    const displayedVans = typeFilter ? vansData.filter(van => van.type === typeFilter) : vansData;
    
    const vanCards = displayedVans.map((van) => {
        return <VanCard key={van.id} {...van} state={{search: `?${searchParams.toString()}`, type: typeFilter}}/>
    });


    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key);
            } else {
                prevParams.set(key, value);
            }
            return prevParams;
        });
    };

    return (
        <div className="vans">
            <section className="vans-top">
                <div className="container">
                    <h1 className="vans-title">Explore our van options</h1>

                    <div className="filters">
                        <button onClick={() => setSearchParams("?type=simple")} className={`filter-btn ${typeFilter === 'simple' ? "selected" : ""}`}>Simple</button>
                        <button onClick={() => setSearchParams("?type=luxury")} className={`filter-btn ${typeFilter === 'luxury' ? "selected" : ""}`}>Luxury</button>
                        <button onClick={() => setSearchParams("?type=rugged")} className={`filter-btn ${typeFilter === 'rugged' ? "selected" : ""}`}>Rugged</button>
                        {
                            typeFilter ? (
                                <button onClick={() => setSearchParams(".")} className="filter-clear-btn">Clear filters</button>
                            ) : null
                        }
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