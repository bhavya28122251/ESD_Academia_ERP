import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/LoginCard.css"; // Importing the CSS file

function LoginCard({ email, password, setEmail, setPassword, error, handleSubmit }) {
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="card login-card">
          <div className="card-body">
            <h3 className="card-title text-center mb-4">Faculty Login</h3>
            
            <div className="mb-3">
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
            {error && <div className="alert alert-danger mt-3">{error}</div>}
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginCard;