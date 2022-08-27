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
import "plyr-react/plyr.css";

const EpisodeCourse = () => {
  const arr = [
    { key: "1", name: "1اسم و نام این جلسه" },
    { key: "2", name: "2اسم و نام این جلسه" },
  ];
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
    // const data = await axios.get(
    //   `http://localhost:5000/get-video/5mHGyDnPtHM6uesdWbvmpJ_Couple on the beach.mp4`
    // );
    // console.log(data)
    setUrl(
      "https://cake-store-videos.s3.ir-thr-at1.arvanstorage.com/5mHGyDnPtHM6uesdWbvmpJ_Couple%20on%20the%20beach.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=50dd610c-ecd8-4f51-ae99-18df7c6f3793%2F20220822%2Fdefault%2Fs3%2Faws4_request&X-Amz-Date=20220822T215617Z&X-Amz-Expires=86400&X-Amz-Signature=956aaf47fde809f2fa9ec005beaa69d5f7334b2cf3b1de10842d73d47093591a&X-Amz-SignedHeaders=host&x-amz-user-agent=aws-sdk-js%2F3.150.0&x-id=GetObject"
    );
  };

  return (
    <List
      sx={{
        "& .MuiListItem-root": {
          px: { xs: 0, sm: 2 },
        },
      }}
    >
      {arr.map((value, index) => (
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
              <Typography sx={{ width: 1, textAlign: "right", p: 1, px: 2 }}>
                {value.name}
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
            <AccordionDetails sx={{'& .plyr__volume':{
                width: 'fit-content',
                minWidth:'unset'
            }}}>
              <Plyr {...plyrProps} style={{ width: "100%" }} />
            </AccordionDetails>
          </Accordion>
        </ListItem>
      ))}
    </List>
  );
};
export default EpisodeCourse;
