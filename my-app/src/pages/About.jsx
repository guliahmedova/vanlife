import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const About = () => {
    return (
        <div className="about">
            <Navbar />

            <section className="img-sec">
                <img src="./images/abouthero.png" alt="" />
            </section>

            <section className="content-sec">
                <div className="container">
                    <div>
                        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                        <br />
                        <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                    </div>
                </div>
            </section>

            <section className="card-sec">
                <div className="container">
                    <div className="card-sec-div">
                        <h2>
                            Your destination is waiting.
                            Your van is ready.
                        </h2>
                        <Link to="/vans" className="custom-btn">Explore our vans</Link>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default About