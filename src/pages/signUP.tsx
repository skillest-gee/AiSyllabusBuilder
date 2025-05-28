import './auth.css';

export default function Signup() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Create Account</h2>
        <p>Fill in your details to start using AisyBallus.</p>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p className="auth-footer">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
}
