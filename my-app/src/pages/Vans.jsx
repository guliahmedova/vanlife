import Navbar from "../components/Navbar";
import VanCard from '../components/VanCard';
import Footer from '../components/Footer';
import { useEffect, useState } from "react";
import '../server';

const Vans = () => {

    const [vanDatas, setVanDatas] = useState([]);

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVanDatas(data.vans))
    }, []);

    const vanCards = vanDatas.map((van) => {
        return <VanCard key={van.id} {...van} />
    })

    return (
        <div className="vans">
            <Navbar />
            <section className="vans-top">
                <div className="container">
                    <h1>Explore our van options</h1>

                    <div className="filters">
                        <button className="filter-btn">Simple</button>
                        <button className="filter-btn">Luxury</button>
                        <button className="filter-btn">Rugged</button>
                        <button className="filter-clear-btn">Clear filters</button>
                    </div>
                </div>
            </section>

            <section className="main">
                <div className="cards">
                    {vanCards}
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Vans