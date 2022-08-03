import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SimpleReactValidator from "simple-react-validator";
import { loginUser } from "../../../services/userService";
import jwt from "jsonwebtoken";
import { useDispatch } from "react-redux";
import { setUser } from "../../../Redux/Action/userAction";
import { toastUpdate } from "../../utils/toast";
import FormLogin from "./FormLogin";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigate();
  // Validation Form
  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "پر کردن این فیلد الزامی میباشد",
        email: "ایمیل وارد شده صحیح نیست",
        min: "کتر از 5 کاراکتر نباید باشد",
      },
      element: (message) => <div style={{ color: "red" }} className='form-text'>{message}</div>,
    })
  );
  const [, forceUpdate] = useState();

  const loginHandler = async (e) => {
    e.preventDefault();
    const load = toast.loading("در حال بارگیری اطلاعات");
    const user = {
      email,
      password,
    };
    try {
      if (validator.current.allValid()) {
        const { status, data } = await loginUser(user);
        if (status === 200) {
          localStorage.setItem("token", data.token);
          const decodeToken = jwt.decode(data.token, { complete: true });
          dispatch(setUser(decodeToken.payload.user));
          toastUpdate(load, "success", "ورود موفقیت آمیز بود");
          navigation("/", { replace: true });
        }
      } else {
        validator.current.showMessages();
        forceUpdate(1);
        toastUpdate(load, "error", "اعتبار سنجی فیلد ها رعایت نشده");
      }
    } catch (err) {
      console.log(err);
      toastUpdate(load, "error", "مشکلی پیش آمده");
    }
  };

  return (
    <>
      <Helmet>
        <title>سایت فروشگاهی | ورود به سایت</title>
      </Helmet>
      <FormLogin
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        validator={validator}
        loginHandler={loginHandler}
      />
    </>
  );
};
export default Login;
