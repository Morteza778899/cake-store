import { orderBy } from "lodash";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Paginat from "../../courses/Paginat";
import AddModal from "./AddModal";
import EditModal from "./EditModal";
import SearchAdd from "./SearchAdd";
import Table from "./Table";

const Div = styled.div``;
const CoursesDash = () => {
  const courses = useSelector((state) => state.courses);
  const [search, setSearch] = useState("");
  const [filterCourses, setFilterCourses] = useState(courses);
  const searchHandler = (text) => {
    setSearch(text);
  };
  useEffect(() => {
    let filter = courses.filter((course) => course.title.includes(search));
    setCurrentPage(1); // با هر بار تغییر اینپوت بره به صفحه ی اول جستجو
    if (sortStatus === "asc") {
      let sorted = orderBy(filter, "price", "asc");
      setFilterCourses(sorted);
    } else if (sortStatus === "des") {
      let sorted = orderBy(filter, "price", "desc");
      setFilterCourses(sorted);
    } else {
      setFilterCourses(filter);
    }
  }, [search]);

  const [sortStatus, setSortStatus] = useState("");
  const sortHandler = (value) => {
    setSortStatus(value);
  };
  useEffect(() => {
    if (sortStatus === "asc") {
      let sorted = orderBy(filterCourses, "price", "asc");
      setFilterCourses(sorted);
    } else if (sortStatus === "des") {
      let sorted = orderBy(filterCourses, "price", "desc");
      setFilterCourses(sorted);
    }
  }, [sortStatus]);

  // در اینجا تعداد آیتم در هر صفحه 10 میباشد
  //  که میتوان همه ی 10 های پایین را به هر عدد داخواهی تغییر داد
  const [currentPage, setCurrentPage] = useState(1);
  let arrayX8 = filterCourses.filter((value, index) => index >= (currentPage - 1) * 5 && index <= currentPage * 5 - 1);
  let countPage = Math.ceil(filterCourses.length / 5);
  const pageHandler = (num) => {
    setCurrentPage(num);
  };

  const [showAddModal, setShowAddModal] = useState(false);
  const AddModalHandler = (bool) => {
    setShowAddModal(bool);
  };

  return (
    <Div>
      {showAddModal && <AddModal AddModalHandler={AddModalHandler} />}
      <SearchAdd AddModalHandler={AddModalHandler} searchHandler={searchHandler} />
      <Table arrayX8={arrayX8} sortHandler={sortHandler} sortStatus={sortStatus} />
      <Paginat countPage={countPage} currentPage={currentPage} pageHandler={pageHandler} />
    </Div>
  );
};
export default CoursesDash;
