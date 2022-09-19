// Core modules imports are same as usual
import { Autoplay, EffectCreative, Navigation } from "swiper";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

// Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module
import "swiper/modules/effect-creative/effect-creative.scss";
import "swiper/modules/autoplay/autoplay.scss";
import { Button, Typography, useMediaQuery } from "@mui/material";

const Slide = ({ changeHandler }) => {
  const xsWith = useMediaQuery('(max-width:430px)')
  return (
    <Swiper
      modules={[Navigation, EffectCreative, Autoplay]}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
        waitForTransition: false, //بخاطر این فالس کردم که تشخیص زمانش برای ساخت پراگرس بار بهم میریخت
        // یا حداقل برای این روشی که من نوشتم بهم میریخت
      }}
      navigation
      dir="rtl"
      effect={"creative"}
      creativeEffect={{
        prev: {
          translate: ["100%", 0, 0],
          opacity: 0,
        },
        next: {
          translate: ["-100%", 0, 0],
          opacity: 0,
        },
      }}
      speed={1300}
      onSlideChange={() => changeHandler()}
    >

      <SwiperSlide>
        {({ isActive, isNext }) => (
          <div className="h-100 container d-flex justify-content-end align-items-center">
            <div className={`title slide-2-title `}>
              <div>
                <Typography variant="h1" pb={2}
                  className={`animate__animated ${isActive
                    ? "animate__fadeInUp animate__delay-1s"
                    : isNext
                      ? "animate__fadeOutLeft"
                      : "animate__fadeOutRight"
                    }`}
                >
                  آموزش
                </Typography>
              </div>
              <Typography fontSize={xsWith && 22} variant="h4"
                className={`animate__animated ${isActive
                  ? "animate__fadeInUp animate__delay-1s"
                  : isNext
                    ? "animate__fadeOutLeft"
                    : "animate__fadeOutRight"
                  }`}
              >
                از مبتدی ترین تا پیشرفته
              </Typography>
              <div>
                <Typography fontSize={xsWith && 12} variant="body1"
                  maxWidth={750}
                  sx={{ bgcolor: '#80808073', borderRadius: 1 }}
                  className={`animate__animated  ${isActive
                    ? "animate__fadeInUp animate__delay-2s"
                    : isNext
                      ? "animate__fadeOutLeft"
                      : "animate__fadeOutRight"
                    }`}
                >
                  سعی کردم توی دوره ها از مبتدی ترین موارد به شکل ساده شروع کنم و آروم آروم سطح کار رو تا پیشرفته بالا ببرم تا همه ی افراد که علاقه به یادگیری دارن  ولی تا حالا سابقه کار نداشتن هم بتونن از دوره ها استفاده کنن
                </Typography>
              </div>
              <div>
                <Button
                  className={`animate__animated  ${isActive
                    ? "animate__fadeInUp animate__delay-3s"
                    : "animate__fadeOutDown"
                    }`}
                >
                  تماشای جزئیات
                </Button>
              </div>
            </div>
          </div>
        )}
      </SwiperSlide>

      <SwiperSlide>
        {({ isActive }) => (
          <div className="h-100 container d-flex justify-content-center align-items-center">
            <div className={`title slide-1-title `}>
              <div>
                <Typography fontSize={xsWith && 16} variant="h5"
                  className={`mb-0 animate__animated ${isActive
                    ? "animate__fadeInUp animate__delay-1s"
                    : "animate__fadeOutRight"
                    }`}
                >
                  خودتون میتونید باست بزنید
                </Typography>
              </div>
              <div>
                <Typography fontSize={xsWith && 18} variant="h4"
                  className={`animate__animated ${isActive
                    ? "animate__fadeInUp animate__delay-1s"
                    : "animate__fadeOutRight"
                    }`}
                >
                  خیلی بهتر از کلاس‌های حضوری
                </Typography>
              </div>
              <div>
                <Typography fontSize={xsWith && 12} variant="body1"
                  maxWidth={750}
                  sx={{ bgcolor: '#808080b0', borderRadius: 1 }}
                  className={`animate__animated  ${isActive
                    ? "animate__fadeInUp animate__delay-2s"
                    : "animate__fadeOutRight"
                    }`}
                >
                  تو دوره مجازی به دلیل محدود نبودن وقت خیلی بهتر و کامل تر آموزش انجام میشه
                  و هنرجوها هم با آرامش صفر تا صد کار رو خودشون انجام میدن که بهترین نحو آموزشه.
                  برخلاف کلاس های حضوری که به دلیل کمبود وقت و فضا شاید کار مجبوره سریع جمع بشه و هنر جو ناچاراً از  خیلی از موارد یادنگرفته باید عبور کنه
                </Typography>
              </div>
              <div>
                <Button
                  className={`animate__animated  ${isActive
                    ? "animate__fadeInUp animate__delay-3s"
                    : "animate__fadeOutDown"
                    }`}
                >
                  درخواست
                </Button>
              </div>
            </div>
          </div>
        )}
      </SwiperSlide>



      <SwiperSlide>
        {({ isActive }) => (
          <div className="h-100 container d-flex justify-content-start align-items-center">
            <div className={`title slide-3-title`}>
              <div>
                <Typography variant="h3" pb={1}
                  className={`animate__animated ${isActive
                    ? "animate__fadeInUp animate__delay-1s"
                    : "animate__fadeOutLeft"
                    }`}
                >
                  پشتیبانی
                </Typography>
              </div>
              <div>
                <Typography fontSize={xsWith && 18} variant="h5"
                  className={`animate__animated ${isActive
                    ? "animate__fadeInUp animate__delay-1s"
                    : "animate__fadeOutLeft"
                    }`}
                >
                  پشتیبانی ۳ ماهه برای تمامی دوره‌ها
                </Typography>
              </div>
              <div>
                <Typography fontSize={xsWith && 12} variant="body1"
                  maxWidth={750}
                  sx={{ bgcolor: '#80808073', borderRadius: 1 }}
                  className={`animate__animated  ${isActive
                    ? "animate__fadeInUp animate__delay-2s"
                    : "animate__fadeOutLeft"
                    }`}
                >
                  در حین تماشای ویدیو های آموزشی دوره
                  هر سوالی براتون پیش اومد رو میتونید
                  از طریق پشتیبانی دوره ها از من بپرسید و بهتون جواب میدم
                </Typography>
              </div>
              <div>
                <Button
                  className={`animate__animated  ${isActive
                    ? "animate__fadeInUp animate__delay-3s"
                    : "animate__fadeOutDown"
                    }`}
                >
                  درخواست
                </Button>
              </div>
            </div>
          </div>
        )}
      </SwiperSlide>
    </Swiper>
  );
};
export default Slide;
