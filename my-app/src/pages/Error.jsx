import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();

  return (
    <div className='container'>
      <h1>{error.message}</h1>
      <p>{error.statusText}</p>
      <span>{error.status}</span>
    </div>
  )
}

export default Error;