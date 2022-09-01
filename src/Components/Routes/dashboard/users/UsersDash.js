import Search from "./Search";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { getAllUser } from "../../../../services/userService";
import Paginat from "../../courses/Paginat";
import Table from "./Table";

const Div = styled.div``;
const CoursesDash = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [usersFilter, setUsersFilter] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllUser();
        setUsers(data.data.users);
        setUsersFilter(data.data.users);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
    fetchData();
  }, []);

  const searchHandler = (text) => {
    setSearch(text);
  };
  
  useEffect(() => {
    let filter = users.filter((user) => user.phone.includes(search));
    setCurrentPage(1); // با هر بار تغییر اینپوت بره به صفحه ی اول جستجو
    setUsersFilter(filter);
  }, [search]);

  // در اینجا تعداد آیتم در هر صفحه 10 میباشد
  //  که میتوان همه ی 10 های پایین را به هر عدد داخواهی تغییر داد
  const [currentPage, setCurrentPage] = useState(1);
  let arrayX8 = usersFilter.filter(
    (value, index) =>
      index >= (currentPage - 1) * 5 && index <= currentPage * 5 - 1
  );
  let countPage = Math.ceil(usersFilter.length / 5);
  const pageHandler = (num) => {
    setCurrentPage(num);
  };

  return (
    <Div>
      <Search searchHandler={searchHandler} />
      <Table arrayX8={arrayX8} />
      <Paginat
        countPage={countPage}
        currentPage={currentPage}
        pageHandler={pageHandler}
      />
    </Div>
  );
};
export default CoursesDash;
