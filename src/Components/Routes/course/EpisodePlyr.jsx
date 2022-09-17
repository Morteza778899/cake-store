import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import Plyr from "plyr-react";
import { useEffect } from "react";
import { useRef } from "react";

const EpisodePlyr = ({ url }) => {
    const smWidth = useMediaQuery("(min-width:600px)");
    const ref = useRef()
    useEffect(() => {
        console.log("internal plyr instance:", ref.current.plyr)
      })
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
    return (
        <Box>
            <Plyr {...plyrProps} style={{ width: "100%" }} ref={ref}/>
        </Box>
    )
}
export default EpisodePlyr