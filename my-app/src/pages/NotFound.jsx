import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">
        <div className="container">
            <h1>Sorry, the page you were looking for was not found.</h1>
            <div className="back-to-home-btn"><Link to="/">Return to Home</Link></div>
        </div>
    </div>
  )
}

export default NotFound