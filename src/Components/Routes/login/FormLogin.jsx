const FormLogin = ({ phone, setPhone, validator, loginHandler }) => {
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
                name="phone"
                class="form-control"
                placeholder="شماره همراه"
                aria-describedby="email-address"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  validator.current.showMessageFor("phone");
                }}
              />
              {validator.current.message("phone", phone, "required|min:11|max:11")}
            </div>

            <button className="btn btn-success"> ورود به سایت </button>
          </form>
        </div>
      </div>
    </main>
  );
};
export default FormLogin;
