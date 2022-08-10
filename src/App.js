import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainLayout from "./Components/Layout/MainLayout";
import HomePage from "./Components/Routes/home/HomePage";
import Login from "./Components/Routes/login/Login";
import Logout from "./Components/Routes/logout/Logout";
import Register from "./Components/Routes/register/Register";
import ClipLoader from "react-spinners/ClipLoader";
import SingleCourse from "./Components/Routes/course/SingleCourse";
import jwt from "jsonwebtoken";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import { clearUser, setUser } from "./Redux/Action/userAction";
import NotFound from "./Components/Routes/404/NotFound";
import Dashboard from "./Components/Routes/dashboard/Dashboard";
import CoursesDash from "./Components/Routes/dashboard/courses/CoursesDash";
const App = () => {
  const loading = useSelector((state) => state.loading);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodeToken = jwt.decode(token, { complete: true });
      const dateNow = Date.now() / 1000;
      if (decodeToken.payload.exp < dateNow) {
        localStorage.removeItem("token");
        dispatch(clearUser());
      } else {
        dispatch(setUser(decodeToken.payload.user));
      }
    }
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "grid",
            width: "100%",
            height: "100vh",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <ClipLoader color={"#202c45"} size={80} />
        </div>
      ) : (
        <>
          <BrowserRouter>
            <MainLayout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={user.userId ? <Navigate to="/" replace="true" /> : <Login />} />
                <Route path="/logout" element={!user.userId ? <Navigate to="/" replace="true" /> : <Logout />} />
                <Route path="/register" element={user.userId ? <Navigate to="/" replace="true" /> : <Register />} />
                <Route path="/course/:id" element={<SingleCourse />} />
                <Route
                  path="/dashboard"
                  element={user.userId && user.isAdmin ? <Dashboard /> : <Navigate to="/" replace="true" />}
                />
                <Route
                  path="/dashboard/courses"
                  element={user.userId && user.isAdmin ? <CoursesDash /> : <Navigate to="/" replace="true" />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </MainLayout>
          </BrowserRouter>
        </>
      )}
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
export default App;
