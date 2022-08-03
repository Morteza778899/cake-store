import { Pagination } from "@mui/material";

const Paginat = ({ countPage, currentPage, pageHandler }) => {
  return (
    <div className="d-flex justify-content-center mt-3">
      <Pagination
        count={countPage}
        page={currentPage}
        onChange={(e, value) => pageHandler(value)}
        variant="outlined"
        color="secondary"
      />
    </div>
  );
};
export default Paginat;
