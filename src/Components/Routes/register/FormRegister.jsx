const FormRegister = ({
  fullname,
  setFullname,
  password,
  setPassword,
  email,
  setEmail,
  policy,
  setPolicy,
  validator,
  formHandler,
}) => {
  return (
    <main class="client-page">
      <div class="container-content">
        <header>
          <h2> عضویت در سایت </h2>
        </header>
        <div class="form-layer">
          <form onSubmit={formHandler}>
            <div class="input-group" style={{ position: "relative" }}>
              <span class="input-group-addon" id="username">
                <i class="zmdi zmdi-account"></i>
              </span>
              <input
                type="text"
                name="fullname"
                class="form-control"
                placeholder="نام و نام خانوادگی"
                aria-describedby="username"
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                  validator.current.showMessageFor("fullname");
                }}
              />
              {validator.current.message("fullname", fullname, "required|min:5")}
            </div>

            <div class="input-group">
              <span class="input-group-addon" id="email-address">
                <i class="zmdi zmdi-email"></i>
              </span>
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

            <div class="input-group">
              <span class="input-group-addon" id="password">
                <i class="zmdi zmdi-lock"></i>
              </span>
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

            <div class="accept-rules">
              <label>
                <input
                  type="checkbox"
                  name="policy"
                  value={policy}
                  onChange={(e) => {
                    setPolicy(e.currentTarget.checked);
                    validator.current.showMessageFor("policy");
                  }}
                />{" "}
                قوانین و مقررات سایت را میپذیرم{" "}
              </label>
              {validator.current.message("policy", policy, "accepted")}
            </div>

            <button class="btn btn-success"> عضویت در سایت </button>
          </form>
        </div>
      </div>
    </main>
  );
};
export default FormRegister;
