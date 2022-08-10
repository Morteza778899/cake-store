import { useEffect, useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  position: absolute;
  top: 2px;
  width: ${props=>props.status===true?'100%':'0%'};
  height: 6px;
  border-radius: 5px;
  background-color: #202c45;
  opacity: 0.5;
  z-index: 5;
  transition: ${props=>props.status===true?'all 6s': 'unset'};
`;

const Progress = ({change}) => {
    const [status,setStatus]=useState(false)

    useEffect(()=>{
        setStatus(false)
        setTimeout(() => {
            setStatus(true)
        }, 100);
    },[change])
  return <Div className="progress-bar" status={status} ></Div>;
};
export default Progress;
