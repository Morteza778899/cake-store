const FormLogin = ({ email, setEmail, password, setPassword, validator, loginHandler }) => {
  return (
    <main className="client-page">
      <div className="container-content">
        <header>
          <h2> ورود به سایت </h2>
        </header>
        <div className="form-layer">
          <form onSubmit={loginHandler} className='mx-5' dir='rtl'>

            <div className="my-2">
              <input
                type="text"
                name="email"
                class="form-control"
                placeholder="ایمیل"
                aria-describedby="email-address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validator.current.showMessageFor("email");
                }}
              />
              {validator.current.message("email", email, "required|email")}
            </div>

            <div classNames="my-2">
              <input
                type="password"
                name="password"
                class="form-control"
                placeholder="رمز عبور "
                aria-describedby="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validator.current.showMessageFor("password");
                }}
              />
              {validator.current.message("password", password, "required|min:5")}
            </div>

            <div className="remember-me">
              <label>
                <input type="checkbox" name="" /> مرا بخاطر بسپار{" "}
              </label>
            </div>

            <div className="link">
              <a href="">
                {" "}
                <i className="zmdi zmdi-lock"></i> رمز عبور خود را فراموش کرده ام !
              </a>
            </div>

            <button className="btn btn-success"> ورود به سایت </button>
          </form>
        </div>
      </div>
    </main>
  );
};
export default FormLogin;
