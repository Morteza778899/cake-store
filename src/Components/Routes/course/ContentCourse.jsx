import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import EpisodeCourse from "./EpisodeCourse";
import PracticeCourse from "./PracticeCourse";

const Div = styled.div`
    box-shadow: 0 0 7px 0 #eaeff4;
    border: 1px solid #ecf0f4;
    border-radius: 5px;
`

const ContentCourse = ({ course }) => {
  const [image, setImage] = useState('')

  useEffect(() => {
    if (course.image) {
      setImage(course.image.imageLink)
    }
  }, [])

  return (
    <Div className='p-4'>
      <img src={image} className="w-100 mb-4" alt='' />
      <Typography variant='h4' textAlign='center' my={4} fontWeight={900}>{course.title}</Typography>
      <Typography sx={{ p: { xs: 0, sm: 2 }, textAlign: 'justify' }}>
        {course.body}
      </Typography>

      <PracticeCourse />
      <EpisodeCourse />

    </Div>
  );
};
export default ContentCourse;
