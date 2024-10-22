import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './Login.css'; // Import the CSS file for styling

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/api/login', { email, password });
            if (res.data.token) {
                localStorage.setItem('token', res.data.token);
                alert('Login successful');
                navigate('/home');
            } else {
                alert(res.data.message);
            }
        } catch (err) {
            alert('Login failed');
        }
    };

    return (
        <div className="login-container">
            {/* Left side with branding */}
            <div className="login-left">
                <h1>NH News Hub</h1>
                <p>Building The Future....</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore officia, quae, animi distinctio sit mollitia exercitationem earum quos dolores consequatur aliquid harum.</p>
            </div>

            {/* Right side login form */}
            <div className="login-box">
                <h2>Welcome Back</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Continue</button>
                </form>


                <p>Don't have an account? <Link to="/signup">Signup here</Link></p>
            </div>
        </div>
    );
}

export default Login;
