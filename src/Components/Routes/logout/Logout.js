import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../../../Redux/Action/userAction";

const Logout = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  useEffect(() => {
    localStorage.removeItem("token");
    dispatch(clearUser());
    navigation(0);  // refresh page for update http request or something 
    navigation("/", { replace: true });
  }, []);
  return null;
};
export default Logout;
