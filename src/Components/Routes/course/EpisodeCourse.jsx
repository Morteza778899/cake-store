import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  List,
  ListItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useState } from "react";
import axios from "axios";
import Plyr from "plyr-react";
import { getUrlVideoService } from "../../../services/courseService";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const EpisodeCourse = () => {
  const course = useSelector((state) => state.course);
  const [expanded, setExpanded] = useState(false);
  const [url, setUrl] = useState("");
  const smWidth = useMediaQuery("(min-width:600px)");

  const plyrProps = {
    source: {
      type: "video",
      sources: [
        {
          src: url,
          type: "video/mp4",
        },
      ],
    },
    options: {
      controls: [
        "play-large",
        "play",
        "progress",
        smWidth && "current-time",
        smWidth && "volume",
        smWidth && "settings",
        "mute",
        "pip",
        "airplay",
        "fullscreen",
      ],
    },
  };

  const handleChange = (panel) => async (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    try {
      const data = await getUrlVideoService({
        key: panel,
        courseId: course._id,
      });
      setUrl(data.data.url);
    } catch (error) {
      toast.error(error.response.data.message);
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
              <Typography sx={{ width: 1, textAlign: "left", p: 1, px: 2 }}>
                {value.size}
              </Typography>
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
              <Plyr {...plyrProps} style={{ width: "100%" }} />
            </AccordionDetails>
          </Accordion>
        </ListItem>
      ))}
    </List>
  );
};
export default EpisodeCourse;
