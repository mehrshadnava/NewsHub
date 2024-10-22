// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Signup() {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('http://localhost:8000/api/signup', { email, password });
//             if (res.status === 201) {
//                 alert('User created successfully');
//                 navigate('/login');
//             } else if (res.status === 400) {
//                 alert('User already exists');
//             }
//         } catch (err) {
//             alert('Error during signup');
//         }
//     };

//     return (
//         <div>
//             <h2>Signup</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button type="submit">Signup</button>
//             </form>
//         </div>
//     );
// }

// export default Signup;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './SignUp.css'; // Import your new CSS file

function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/api/signup', { email, password });
            if (res.status === 201) {
                alert('User created successfully');
                navigate('/login');
            } else if (res.status === 400) {
                alert('User already exists');
            }
        } catch (err) {
            alert('Error during signup');
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <div className="signup-form">
                    <h2>Get Started</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="User Name"
                        />
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
                        <button type="submit">Sign Up</button>
                    </form>

                    

                    <p>Already have an account? <a href="/login">Login</a></p>
                </div>

                {/* Right side image */}
                <div className="signup-image">
                    <img src="/backgroundLoginImage.png" alt="Signup" />
                </div>
            </div>
        </div>
    );
}

export default Signup;

