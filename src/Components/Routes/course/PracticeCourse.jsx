import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { getUrlPracticeService } from "../../../services/courseService";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PracticeCourse = () => {
  const course = useSelector((state) => state.course);

  const handleChange = async (key) => {
    try {
      const data = await getUrlPracticeService({
        key: key,
        courseId: course._id,
      });
      window.location.href = data.data.url
    } catch (error) {
      toast.error(error.response.data.message)
    }
  };

  return (
    <>
      {
        course.practice.length > 0 && (
          <List
            sx={{
              "& .MuiListItem-root": {
                px: { xs: 0, sm: 2 },
              },
            }}
          >
            <Accordion
              sx={{
                border: "1px dashed #ff0040",
                width: 1,
                borderRadius: 6,
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                dir="rtl"
              >
                <Typography color={'#dc8e00'}>تمرین‌های دوره</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  "& .plyr__volume": {
                    width: "fit-content",
                    minWidth: "unset",
                  },
                }}
              >
                <>
                  {course.practice.map((value, index) => (
                    <ListItem key={value.key} p={0}>
                      <Button variant="contained" color="warning" onClick={() => handleChange(value.key)}>دانلود</Button>
                      <Typography
                        sx={{ textAlign: "right", p: 1, px: 2 }}
                        flexGrow={1}
                      >
                        {value.title}
                      </Typography>
                      <Avatar
                        sx={{
                          border: "3px solid #bbc1c7",
                          background: "none",
                          width: 35,
                          height: 35,
                        }}
                      >
                        <Typography fontSize="18px" fontWeight={900} color="#616161">
                          {index + 1}
                        </Typography>
                      </Avatar>
                    </ListItem>
                  ))}
                </>
              </AccordionDetails>
            </Accordion>
          </List>
        )
      }
    </>
  );
};
export default PracticeCourse;
