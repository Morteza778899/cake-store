import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useState } from "react";
import { getUrlVideoService } from "../../../services/courseService";
import { useSelector } from "react-redux";
import EpisodePlyr from "./EpisodePlyr";
import ClipLoader from "react-spinners/ClipLoader";

const EpisodeCourse = () => {
  const course = useSelector((state) => state.course);
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({ status: true, message: '' });
  const [url, setUrl] = useState("");



  const handleChange = (panel) => async (event, isExpanded) => {
    setLoading(true)
    setExpanded(isExpanded ? panel : false);
    try {
      const data = await getUrlVideoService({
        key: panel,
        courseId: course._id,
      });
      setUrl(data.data.url);
      setResult({ status: true, message: '' })
      setLoading(false)
    } catch (error) {
      setResult({ status: false, message: error.response.data.message })
      setLoading(false)
    }
  };
  return (
    <List
      sx={{
        "& .MuiListItem-root": {
          px: { xs: 0, sm: 2 },
        },
      }}
    >
      {course.episode.map((value, index) => (
        <ListItem key={value.key} p={0}>
          <Accordion
            expanded={expanded === value.key}
            onChange={handleChange(value.key)}
            sx={{
              border: "1px dashed #d7e0e9",
              width: 1,
              borderRadius: 6,
              boxShadow: "none",
            }}
          >
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <PlayCircleIcon color="secondary" fontSize="large" />
              <Typography sx={{ width: 1, textAlign: "left", p: 1, px: 2 }}>
                {value.time} دقیقه
              </Typography>
              <Typography sx={{ width: 1, textAlign: "right", p: 1, px: 2 }}>
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
            </AccordionSummary>
            <AccordionDetails
              sx={{
                "& .plyr__volume": {
                  width: "fit-content",
                  minWidth: "unset",
                },
              }}
            >
              {
                loading ? (
                  <Stack justifyContent='center'>
                    <ClipLoader color="#f2184f" />
                  </Stack>
                ) : result.status ? (
                  <EpisodePlyr url={url} />
                ) : (
                  <Stack justifyContent='center' color='red'>
                    <Typography>{result.message}</Typography>
                  </Stack>
                )
              }
            </AccordionDetails>
          </Accordion>
        </ListItem>
      ))}
    </List>
  );
};
export default EpisodeCourse;
