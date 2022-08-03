import styled from "styled-components"

const Div = styled.div`
    h4 {
      text-align: center;
    }
    li {
      font-size: 16px;
      color: rgb(102, 102, 102);
      border-bottom: 1px dashed #8d8d8d4e;
    }
`

const Hours = ()=>{
    return (
        <Div className="col hours">
        <h4>ساعات کاری</h4>
        <ul className='list-unstyled p-2'>
          <li className='p-2'>Mon - Tues :6.00 am - 10.00 pm</li>
          <li className='p-2'>Wednes - Thurs :8.00 am - 6.00 pm</li>
          <li className='p-2'>Fri :3.00 pm - 8.00 pm</li>
          <li className='p-2'>Sun : Closed</li>
        </ul>
      </Div>
    )
}
export default Hours