import { useEffect, useState } from "react";

const SearchAdd = ({ AddModalHandler, searchHandler }) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    searchHandler(searchText);
  }, [searchText]);
  
  return (
    <>
      <h2 className="alert alert-info text-center m-3">
        <b>لیست دوره‌ها</b>
      </h2>
      <div className="d-flex my-4">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-75 form-control mx-3"
          placeholder="جست و جو کنید"
          dir="rtl"
        />
        <button className="w-25 btn btn-success mx-3" onClick={() => AddModalHandler(true)}>
          اضافه کردن دوره جدید
        </button>
      </div>
    </>
  );
};
export default SearchAdd;
