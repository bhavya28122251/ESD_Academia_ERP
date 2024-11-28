import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/LoginCard.css"; // Ensure the path is correct

function LoginCard({ email, password, setEmail, setPassword, error, handleSubmit }) {
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="card login-card">
          <div className="card-body">
            <h3 className="card-title text-center mb-4">Faculty Login</h3>
            
            <div className="form-group">
              <input
                type="email"
                id="email"
                className="form-control email-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                id="password"
                className="form-control password-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary submit-btn w-100">
              Login
            </button>

            {error && <div className="alert alert-danger error-alert mt-3">{error}</div>}
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginCard;
