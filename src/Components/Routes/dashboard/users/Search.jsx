import { useEffect, useState } from "react";

const SearchAdd = ({ searchHandler }) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    searchHandler(searchText);
  }, [searchText]);
  
  return (
    <>
      <h2 className="alert alert-info text-center m-3">
        <b>لیست کاربران</b>
      </h2>
      <div className="d-flex my-4">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-75 form-control mx-auto"
          placeholder="جست و جو کنید"
          dir="rtl"
        />
      </div>
    </>
  );
};
export default SearchAdd;
