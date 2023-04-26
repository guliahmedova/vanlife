import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const VanDetail = () => {
    const { id } = useParams();
    const [vanData, setVanData] = useState(null);

    useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => setVanData(data?.vans))
    }, [id]);

    return (
        <div className="van-detail">
            {vanData ?
                <div className="container">
                    <div className="van-detail-card">
                        <img src={vanData.imageUrl} alt="" />
                        <div className={`van-type ${vanData.type} selected`}>{vanData.type}</div>
                        <h1>{vanData.name}</h1>
                        <h2><span>${vanData.price}</span><span>/day</span></h2>
                        <p>{vanData.description}</p>
                        <button className="rent-type">Rent this van</button>
                    </div>
                </div> : <div className="loading">Loading...</div>}
        </div>
    )
}

export default VanDetail;