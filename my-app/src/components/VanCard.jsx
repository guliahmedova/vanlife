import { Link } from 'react-router-dom';

const VanCard = (props) => {
  console.log(props.state);
  
  return (
    <Link to={props.id} className='card' state={props.state}>
      <img src={props.imageUrl} alt="" />
      <div className="title">
        <h1>{props.name}</h1>
        <h2><span>${props.price}</span> <span>/day</span></h2>
      </div>
      <div className={`van-type ${props.type} selected`}>{props.type}</div>
    </Link>
  )
}

export default VanCard