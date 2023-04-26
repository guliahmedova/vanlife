import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
    const vanData = useOutletContext();

    return (
        <div className="host-van-photos">
            <div className="container">
                <img src={vanData?.vanData?.imageUrl} alt="" />
            </div>
        </div>
    )
}

export default HostVanPhotos