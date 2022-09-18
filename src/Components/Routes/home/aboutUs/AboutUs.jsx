import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import image from "../../../../images/ab3.jpg";

const AboutUs = () => {
  const [animeScrol, setAnimeScrol] = useState(false);
  function onChange(isVisible) {
    if (isVisible) {
      setAnimeScrol(true);
    }
  }

  return (
    <div className="container" id="aboutus">
      <Grid
        container
        sx={{ visibility: `${animeScrol ? "visible" : "hidden"}` }} //این قسمت برای این است که اگر کاربر از منو استفاده کند 
        // و سریع به قسمت درباره ی ما بیاید، قبل از شروع انیمیشن، نتیجه پایانی مشخص نشود
      >
        <Grid item xs={12} lg={6}>
          <ReactVisibilitySensor partialVisibility={true} onChange={onChange}>
            <Box
              className={`details animate__animated  ${
                animeScrol ? "animate__fadeInRight animate__slow" : "hidden"
              }`}
              sx={{ p: 3 }}
            >
              <Typography variant="h4">به قالب آموزشگاهی خوش آمدید</Typography>
              <Typography variant="h5" sx={{ my: 2 }}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                بااستفاده از طراحان گرافیک است
              </Typography>
              <Typography variant="body1">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
              </Typography>
              <Button variant="contained" sx={{ float: "right", my: 2 }}>
                بیشتر بخوانید
              </Button>
            </Box>
          </ReactVisibilitySensor>
        </Grid>
        <Grid item xs={12} lg={6}>
          <ReactVisibilitySensor partialVisibility={true} onChange={onChange}>
            <Stack
              className={`images animate__animated ${
                animeScrol ? "animate__fadeInLeft animate__slow" : "hidden"
              }`}
              sx={{ p: 3 }}
              justifyContent="center"
            >
              <Box
                component="img"
                src={image}
                sx={{ width: 1, maxWidth: 480 }}
              />
            </Stack>
          </ReactVisibilitySensor>
        </Grid>
      </Grid>
    </div>
  );
};
export default AboutUs;
