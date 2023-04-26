import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
    const vanData = useOutletContext();
    console.log(vanData.vanData)

    return (
        <div className="host-van-info">
            <div className="container">
                <h4>Name: <span>{vanData?.vanData?.name}</span></h4>
                <h4>Category: <span>{vanData?.vanData?.type}</span></h4>
                <h4>Description: <span>{vanData?.vanData?.description}</span></h4>
                <h4>Visibility: <span>Public</span></h4>
            </div>
        </div>
    )
}

export default HostVanInfo