import "../styles/Login.css";

const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          className="loginInput"
          type="email"
          placeholder="Enter you'r email..."
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter you'r password..."
        />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">Register</button>
    </div>
  );
};

export default Login;
