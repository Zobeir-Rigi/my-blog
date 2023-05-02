import "../styles/Register.css"


const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>UserName</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter you'r UserName..."
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="email"
          placeholder="Enter you'r email..."
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter you'r password..."
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">Login</button>
    </div>
  );
};

export default Register;
