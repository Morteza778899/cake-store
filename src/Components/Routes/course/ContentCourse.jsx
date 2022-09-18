import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import EpisodeCourse from "./EpisodeCourse";

const Div = styled.div`
    box-shadow: 0 0 7px 0 #eaeff4;
    border: 1px solid #ecf0f4;
    border-radius: 5px;
`

const ContentCourse = ({course}) => {
  const [image,setImage]=useState('')

  useEffect(()=>{
    if(course.image){
      setImage(course.image.imageLink)
    }
  },[])

  return (
    <Div className='p-4'>
      <img src={image} className="w-100 mb-4" alt=''/>
      <Typography variant='h4' textAlign='center' my={4} fontWeight={900}>{course.title}</Typography>
      <Typography sx={{p:{xs:0,sm:2},textAlign:'justify'}}>

      {course.body}
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
        هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
        متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
        پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط
        سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
        طراحی اساسا مورد استفاده قرار گیرد.
      </Typography>

      <EpisodeCourse/>

    </Div>
  );
};
export default ContentCourse;
