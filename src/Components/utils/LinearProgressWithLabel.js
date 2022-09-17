import { LinearProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' ,flexDirection:'row-reverse' }}>
      <Box sx={{ width: '100%', m: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
  export default LinearProgressWithLabel