import { useEffect } from "react";
import styled from "styled-components";
import Search from "./Search";
import Courses from "./Courses";
import Filter from "./Filter";
import FilterList from "./FilterList";
const Div = styled.div`
 
`;
const AllCourses = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <Div className="container">
      <div className="mx-4">
        <Search />
        <div className="row">
          <Courses />
          <div className="col-3">
            <Filter />
            <FilterList />
          </div>
        </div>
      </div>
    </Div>
  );
};
export default AllCourses;
