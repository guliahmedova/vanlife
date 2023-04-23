import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <div className="hero">
                <div className="gradient"></div>
                <div className="content">
                    <h1>You got the travel plans, we <br /> got the travel vans.</h1>
                    <p>Add adventure to your life by joining the #vanlife movement. <br /> Rent the perfect van to make your perfect road trip.</p>
                    <Link to="/vans" className="find-btn">Find your van</Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home