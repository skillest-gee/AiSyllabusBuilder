import { Link } from 'react-router-dom';
import './auth.css';

export default function Login() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <p>Enter your credentials to access your account.</p>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Enter your password" required />
           <Link to="/dashboard">
          <button type="submit" >Sign In</button>
        </Link>
          
        
        </form>
        <p className="auth-footer">
          Forgot your password? <a href="#">Reset Password</a>
        </p>
      </div>
    </div>
  );
}
