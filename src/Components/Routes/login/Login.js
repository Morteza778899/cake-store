import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SimpleReactValidator from "simple-react-validator";
import { loginUser } from "../../../services/userService";
import jwt from "jsonwebtoken";
import { useDispatch } from "react-redux";
import { setUser } from "../../../Redux/Action/userAction";
import { toastUpdate } from "../../utils/toast";
import FormLogin from "./FormLogin";
const Login = () => {
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigate();
  // Validation Form
  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "پر کردن این فیلد الزامی میباشد",
        min: "کمتر از 11 کاراکتر نباید باشد",
        max: "بیشتر از 11 کاراکتر نباید باشد",
      },
      element: (message) => (
        <div style={{ color: "red",textAlign:'center',marginTop:"-20px" }} className="form-text">
          {message}
        </div>
      ),
    })
  );
  const [, forceUpdate] = useState();

  const loginHandler = async (e) => {
    e.preventDefault();
    const load = toast.loading("در حال بارگیری اطلاعات");
    try {
      if (validator.current.allValid()) {
        const { data } = await loginUser(phone);
        localStorage.setItem("token", data.token);
        const decodeToken = jwt.decode(data.token, { complete: true });
        dispatch(setUser(decodeToken.payload.user));
        toastUpdate(load, "success", "ورود موفقیت آمیز بود");
        navigation(0);  // refresh page for update http request or something 
        navigation("/", { replace: true ,state:{}});
      } else {
        validator.current.showMessages();
        forceUpdate(1);
        toastUpdate(load, "error", "اعتبار سنجی فیلد ها رعایت نشده");
      }
    } catch (err) {
      console.log(err.response);
      toastUpdate(load, "error", err.response.data.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>جواد حافظیان | ورود به سایت</title>
      </Helmet>
      <FormLogin
        phone={phone}
        setPhone={setPhone}
        validator={validator}
        loginHandler={loginHandler}
      />
    </>
  );
};
export default Login;
