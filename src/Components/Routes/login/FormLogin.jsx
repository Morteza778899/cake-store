import { Box, Button, Stack, Typography } from "@mui/material";

const FormLogin = ({ phone, setPhone, validator, loginHandler }) => {
  return (
    <main className="client-page">
      <div className="container-content">
        <header>
          <Typography
            variant="h3"
            fontWeight={900}
            textAlign="center"
            sx={{ my: 8 }}
          >
            ورود به سایت
          </Typography>
        </header>
        <div>
          <form onSubmit={loginHandler} className="px-5" dir="rtl">
            <Stack direction='column' gap={5}>
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
                style={{ maxWidth: "400px", marginInline: "auto" }}
              />
              {validator.current.message(
                "phone",
                phone,
                "required|min:11|max:11"
              )}

              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mx: "auto" }}
              >
                ورود به سایت
              </Button>
            </Stack>
          </form>
        </div>
      </div>
    </main>
  );
};
export default FormLogin;
