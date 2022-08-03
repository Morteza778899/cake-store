import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import styled from "styled-components";

import image1 from "../../../images/sm1.jpg";
import image2 from "../../../images/sm2.jpg";

const Div = styled.div`
  display: grid;
  grid-template: auto/1fr;
  span {
    direction: rtl;
  }
  div.items-container {
    margin: 10px;
    margin-bottom: 20px;
    div.item {
      display: grid;
      grid-template: 1fr / repeat(5, max-content);
      justify-items: center;
      align-items: center;
      margin-bottom: 10px;
      .item-img {
        width: 50px;
      }
      .item-title {
        width: 120px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-inline: 5px;
        text-align: center;
      }
      .item-number {
        width: 30px;
        text-align: center;
      }
      .item-prize {
        width: 100px;
        text-align: center;
      }
      .delete-icon {
        width: 30px;
      }
    }
  }

  div.cart-details {
    display: grid;
    grid-template: repeat(3, 30px) / 1fr 1fr;
    align-items: center;
    justify-items: center;
    p {
      justify-self: right;
      margin-right: 60px;
    }
  }
  div.btn-group {
    height: 80px;
    padding-inline: 10px;
    display: grid;
    grid-template: 1fr / repeat(2, max-content);
    align-items: center;
    justify-content: right;
    button {
      width: 95px;
      height: 30px;
      margin: 3px;
      font-size: 14px;
      border: none;
      border-radius: 3px;
      color: white;
      &.checkout {
        background-color: #2e2e2e;
      }
      &.view-cart {
        background-color: #090958;
      }
      :hover {
        cursor: pointer;
        background-color: black;
      }
    }
  }
`;

const BoxShop = () => {
  const items = [
    { title: "خودکار", image: image1, number: 3, prize: 20000, off: 0 },
    {
      title: "کتاب آلیس در سرزمین عجایب و هیولا ها",
      image: image2,
      number: 5,
      prize: 48000,
      off: 0,
    },
  ];

  let totalOrder = 0;
  let totalOff = 0;
  let totalPay = 0;
  for (let x = 0; x < items.length; x++) {
    const prize = items[x].prize * items[x].number;
    const off = items[x].off;
    totalOrder += prize;
    totalOff += off;
    totalPay = totalOrder - totalOff;
  }

  return (
    <Div>
      <div className="items-container">
        {items.map((item) => (
          <div className="item">
            <DeleteForeverIcon className="delete-icon" />
            <span className="item-prize">{`${item.prize} تومان`}</span>
            <span className="item-number">{`X${item.number}`}</span>
            <p className="item-title" title={item.title}>
              {item.title}
            </p>
            <img className="item-img" src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
      <div className="cart-details">
        <span>{`${totalOrder} تومان`}</span>
        <p>مجموع سفارش</p>
        <span>{`${totalOff == 0 ? "--" : totalOff + "تومان"}`}</span>
        <p>تخفیف</p>
        <span>{`${totalPay} تومان`}</span>
        <p>مبلغ پرداختی</p>
      </div>
      <div className="btn-group">
        <button className="checkout">تسویه حساب</button>
        <button className="view-cart">تماشای سبد</button>
      </div>
    </Div>
  );
};
export default BoxShop;
