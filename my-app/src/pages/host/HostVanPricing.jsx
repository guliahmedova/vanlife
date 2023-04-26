import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
    const vanData = useOutletContext();

    return (
        <div className="host-van-pricing">
            <div className="container">
                <span>${vanData?.vanData?.price}</span><span>/day</span>
            </div>
        </div>
    )
}

export default HostVanPricing