import axios from "axios";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SimpleReactValidator from "simple-react-validator";
import { registerUser } from "../../../services/userService";
import { toastUpdate } from "../../utils/toast";
import FormRegister from "./FormRegister";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [policy, setPolicy] = useState(false);
  const navigation = useNavigate();

  const [, forceUpdate] = useState();
  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "پر کردن این فیلد الزامی میباشد",
        email: "ایمیل وارد شده صحیح نیست",
        min: "کمتر از 5 کاراکتر نباید باشد",
        accepted: "پذیرفتن مقررات الزامی ست",
      },
      element: (message) => <div style={{ color: "red" }}>{message}</div>,
    })
  );

  const formHandler = async (event) => {
    event.preventDefault();
    const load = toast.loading("در حال بارگیری اطلاعات");

    const user = {
      fullname,
      email,
      password,
    };

    try {
      if (validator.current.allValid()) {
        const { status } = await registerUser(user);
        if (status === 201) {
          toastUpdate(load, "success", "ثبت نام با موفقیت انجام شد");
        }
        navigation("/login", { replace: false });
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
        <title>سایت آموزشگاهی | ثبت نام در سایت</title>
      </Helmet>
      <FormRegister
        fullname={fullname}
        setFullname={setFullname}
        password={password}
        setPassword={setPassword}
        email={email}
        setEmail={setEmail}
        policy={policy}
        setPolicy={setPolicy}
        validator={validator}
        formHandler={formHandler}
      />
    </>
  );
};
export default Register;
