import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" });

    function handleSubmit(e) {
        e.preventDefault()
        console.log(loginFormData)
    };

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    };

    return (
        <div className='login'>
            <div className="container">
                <h1>Sign in to your account</h1>
                <form action="#" onSubmit={handleSubmit}>
                    <input name="email" value={loginFormData.email} onChange={handleChange} type="email" placeholder='Email address' />
                    <input name="password" value={loginFormData.password} onChange={handleChange} type="password" placeholder='Password' />
                    <button>Log In</button>
                </form>
                <p>Don’t have an account? <Link>Create one now</Link></p>
            </div>
        </div>
    )
}

export default Login