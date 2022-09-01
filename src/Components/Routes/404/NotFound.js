import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div class="d-flex align-items-center justify-content-center">
        <div class="text-center" style={{marginTop:'150px',marginBottom:'150px'}}>
          <h1 class="display-1 fw-bold">404</h1>
          <p class="fs-3">
            <span class="text-danger">Opps!</span> Page not found.
          </p>
          <p class="lead">صفحه مورد نظر پیدا نشد</p>
          <Link to="/" class="btn btn-primary">
            بازگشت به خانه
          </Link>
        </div>
      </div>
    </>
  );
};
export default NotFound;
