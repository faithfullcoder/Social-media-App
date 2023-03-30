import "./login.scss";

export const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            ullam nostrum id laudantium reprehenderit provident? Saepe amet
            alias minima molestias nobis nostrum culpa at modi, necessitatibus
            distinctio maiores eaque autem, nisi magni iste error accusamus?
          </p>
          <span>Don't you have an account</span>
          <button>Register</button>
        </div>
        <div className="right">
            <h1>Login</h1>
            <form>
            <input type="text" placeholder="username"></input>
            <input type="password" placeholder="password"></input>
            <button>Login</button>
            </form>
        </div>
      </div>
      
    </div>
  );
};
