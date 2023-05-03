import VanCard from '../components/VanCard';
import { useState } from "react";
import '../server';
import { useSearchParams } from 'react-router-dom';
import { getVans } from '../utils/api'
import { useLoaderData } from 'react-router-dom';

export function loader() {
    return getVans();
};

const Vans = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [error, setError] = useState(null)
    const typeFilter = searchParams.get('type');

    const vans = useLoaderData();

    const displayedVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans;

    const vanCards = displayedVans.map((van) => {
        return <VanCard key={van.id} {...van} state={{ search: `?${searchParams.toString()}`, type: typeFilter }} />
    });

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
                        vanCards
                    }
                </div>
                <div className="error">
                    {error && error}
                </div>
            </section>

        </div>
    )
}

export default Vans