import TwitterIcon from "@mui/icons-material/Twitter";
import styled from "styled-components";

const Div = styled.div`
  h4 {
    text-align: center;
  }
  li {
    display: flex;
    border-bottom: 1px dashed #8d8d8d4e;
    p {
      text-align: right;
      font-size: 14px;
      color: rgb(102, 102, 102);
      margin: 0px;
    }
    .icon {
      width: 50px;
      color: #f2184f;
    }
  }
`;

const Twitter = () => {
  return (
    <Div className="col twitter">
      <h4>جدیدترین توییت‌ها</h4>
      <div className="twitter-feed">
        <ul>
          <li className="p-2">
            <div>
              <p>
                ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
              </p>
              <p className="mt-1">Feb. 16, 2022</p>
            </div>
            <TwitterIcon className="icon mt-2" />
          </li>
          <li className="p-2">
            <div>
              <p>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
              <p className="mt-1">Feb. 16, 2022</p>
            </div>
            <TwitterIcon className="icon mt-2" />
          </li>
        </ul>
      </div>
    </Div>
  );
};
export default Twitter;
