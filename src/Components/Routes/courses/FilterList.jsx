import { useState } from "react";
import styled from "styled-components";
const Div = styled.div`
  box-shadow: 0 0 7px 0 #eaeff4;
  border: 1px solid #ecf0f4;
  border-radius: 5px;
  input:checked {
    background-color: #f2184f;
    background-clip: content-box;
    border-color: rgba(0, 0, 0, 0.25);
  }
  input:focus {
    box-shadow: none;
  }
  label {
    font-size: 14px;
  }
`;

const FilterList = () => {
  const [filterList, setFilterList] = useState(["all"]);
  //   برای اعمال این بخش باید در کورس هایی که از طرف سرور فرستاده شده
  //   قسمت کتگوری به شکل آرایه ای از کتگوری هایش وجود داشته باشد تا کتگوری هر کورس چک شود
  // const courses = useSelector((state) => state.courses);
  //   const courses = [{ category: ["all"] }, { category: ["android"] }, { category: ["flutter", "all"] }];
  //   const compare = (firstArray, secondArray) => {  // تابعی برای چک کردن وجود داشتن عضوی در عضوهای آن آرایه
  //     for (const x in firstArray) {
  //       for (const y in secondArray) {
  //         if (firstArray[x] == secondArray[y]) {
  //           return true;
  //         }
  //       }
  //     }
  //     return false;
  //   };
  //   const filterCourses = courses.filter((course) => compare(course.category, filterList));


  const boxHandler = (e) => {
      if (e.target.checked) {
        setFilterList([...filterList, e.target.value]);
      } else {
        setFilterList(filterList.filter((item) => item != e.target.value));
      }
  };

  return (
    <Div className="filter-list ltr">
      <nav className="p-4">
        <ul className="list-unstyled">
          <li>
            <div class="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="all"
                id="cat-1"
                checked={filterList.findIndex((item) => item == "all") > -1}
                onChange={(e) => boxHandler(e)}
              />
              <label className="form-check-label text-start w-100" for="cat-1">
                همه دسته بندی ها
              </label>
            </div>
          </li>

          <li>
            <div class="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="programming"
                id="cat-2"
                checked={filterList.findIndex((item) => item == "programming") > -1}
                onChange={(e) => boxHandler(e)}
              />
              <label className="form-check-label text-start w-100" for="cat-2">
                برنامه نویسی و طراحی وب
              </label>
              <ul className="list-unstyled ms-3">
                <li>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="mobile"
                    id="cat-3"
                    checked={filterList.findIndex((item) => item == "mobile") > -1}
                    onChange={(e) => boxHandler(e)}
                  />
                  <label className="form-check-label text-start w-100" for="cat-3">
                    برنامه نویسی موبایل
                  </label>
                  <ul className="list-unstyled ms-3">
                    <li>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="kotlin"
                        id="cat-4"
                        checked={filterList.findIndex((item) => item == "kotlin") > -1}
                        onChange={(e) => boxHandler(e)}
                      />
                      <label className="form-check-label text-start w-100" for="cat-4">
                        Kotlin
                      </label>
                    </li>
                    <li>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="android"
                        id="cat-5"
                        checked={filterList.findIndex((item) => item == "android") > -1}
                        onChange={(e) => boxHandler(e)}
                      />
                      <label className="form-check-label text-start w-100" for="cat-5">
                        Android
                      </label>
                    </li>
                    <li>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="flutter"
                        id="cat-6"
                        checked={filterList.findIndex((item) => item == "flutter") > -1}
                        onChange={(e) => boxHandler(e)}
                      />
                      <label className="form-check-label text-start w-100" for="cat-6">
                        Flutter
                      </label>
                    </li>
                    <li>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="PWA"
                        id="cat-7"
                        checked={filterList.findIndex((item) => item == "PWA") > -1}
                        onChange={(e) => boxHandler(e)}
                      />
                      <label className="form-check-label text-start w-100" for="cat-7">
                        PWA
                      </label>
                    </li>
                  </ul>
                </li>
                <li>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="web"
                    id="cat-8"
                    checked={filterList.findIndex((item) => item == "web") > -1}
                    onChange={(e) => boxHandler(e)}
                  />
                  <label className="form-check-label text-start w-100" for="cat-8">
                    برنامه نویسی وب
                  </label>
                  <ul className="list-unstyled ms-3">
                    <li>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="PHP"
                        id="cat-9"
                        checked={filterList.findIndex((item) => item == "PHP") > -1}
                        onChange={(e) => boxHandler(e)}
                      />
                      <label className="form-check-label text-start w-100" for="cat-9">
                        PHP
                      </label>
                    </li>
                    <li>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="wordpress"
                        id="cat-10"
                        checked={filterList.findIndex((item) => item == "wordpress") > -1}
                        onChange={(e) => boxHandler(e)}
                      />
                      <label className="form-check-label text-start w-100" for="cat-10">
                        Wordpress
                      </label>
                    </li>
                    <li>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="reactjs"
                        id="cat-11"
                        checked={filterList.findIndex((item) => item == "reactjs") > -1}
                        onChange={(e) => boxHandler(e)}
                      />
                      <label className="form-check-label text-start w-100" for="cat-11">
                        React js
                      </label>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="graphic"
                id="cat-12"
                checked={filterList.findIndex((item) => item == "graphic") > -1}
                onChange={(e) => boxHandler(e)}
              />
              <label className="form-check-label text-start w-100" for="cat-12">
                گرافیک
              </label>
            </div>
          </li>
        </ul>
      </nav>
    </Div>
  );
};
export default FilterList;
