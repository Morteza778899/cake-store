import styled from "styled-components";
// Core modules imports are same as usual
import { Autoplay, EffectCreative, Navigation, Pagination } from "swiper";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

// Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module
import "swiper/modules/effect-creative/effect-creative.scss";
import "swiper/modules/autoplay/autoplay.scss";

const Slide = ({ changeHandler }) => {
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
      onSlideChange={()=>changeHandler()}
    >
      <SwiperSlide>
        {({ isActive }) => (
          <div className="h-100 container d-flex justify-content-center align-items-center">
            <div className={`title slide-1-title `}>
              <div>
                <h2
                  className={`mb-0 animate__animated ${
                    isActive
                      ? "animate__fadeInUp animate__delay-1s"
                      : "animate__fadeOutRight"
                  }`}
                >
                  دانش خود را پرورش دهید
                </h2>
              </div>
              <div>
                <h1
                  className={`animate__animated ${
                    isActive
                      ? "animate__fadeInUp animate__delay-1s"
                      : "animate__fadeOutRight"
                  }`}
                >
                  دنیای بهترین دانشگاه ها
                </h1>
              </div>
              <div>
                <p
                  className={`animate__animated  ${
                    isActive
                      ? "animate__fadeInUp animate__delay-2s"
                      : "animate__fadeOutRight"
                  }`}
                >
                  ما همیشه بهترین خدمات خود را برای مشتریان خود ارائه می دهیم
                </p>
                <p
                  className={`animate__animated ${
                    isActive
                      ? "animate__fadeInUp animate__delay-2s"
                      : "animate__fadeOutRight"
                  }`}
                >
                  و همیشه سعی در جلب اعتماد و رضایت مشتریان خود داریم.
                </p>
              </div>
              <div>
                <button
                  className={`animate__animated  ${
                    isActive
                      ? "animate__fadeInUp animate__delay-3s"
                      : "animate__fadeOutDown"
                  }`}
                >
                  درخواست
                </button>
              </div>
            </div>
          </div>
        )}
      </SwiperSlide>

      <SwiperSlide>
        {({ isActive, isNext }) => (
          <div className="h-100 container d-flex justify-content-end align-items-center">
            <div className={`title slide-2-title `}>
              <div>
                <h2
                  className={`animate__animated ${
                    isActive
                      ? "animate__fadeInUp animate__delay-1s"
                      : isNext
                      ? "animate__fadeOutLeft"
                      : "animate__fadeOutRight"
                  }`}
                >
                  تحصیلات
                </h2>
              </div>
              <div>
                <h3
                  className={`animate__animated ${
                    isActive
                      ? "animate__fadeInUp animate__delay-1s"
                      : isNext
                      ? "animate__fadeOutLeft"
                      : "animate__fadeOutRight"
                  }`}
                >
                  آموزش و تحصیلات برای همه
                </h3>
              </div>
              <div>
                <p
                  className={`animate__animated  ${
                    isActive
                      ? "animate__fadeInUp animate__delay-2s"
                      : isNext
                      ? "animate__fadeOutLeft"
                      : "animate__fadeOutRight"
                  }`}
                >
                  ما همیشه بهترین خدمات خود را برای مشتریان خود ارائه می دهیم
                </p>
                <p
                  className={`animate__animated ${
                    isActive
                      ? "animate__fadeInUp animate__delay-2s"
                      : isNext
                      ? "animate__fadeOutLeft"
                      : "animate__fadeOutRight"
                  }`}
                >
                  و همیشه سعی در جلب اعتماد و رضایت مشتریان خود داریم.
                </p>
              </div>
              <div>
                <button
                  className={`animate__animated  ${
                    isActive
                      ? "animate__fadeInUp animate__delay-3s"
                      : "animate__fadeOutDown"
                  }`}
                >
                  تماشای جزئیات
                </button>
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
                <h2
                  className={`animate__animated ${
                    isActive
                      ? "animate__fadeInUp animate__delay-1s"
                      : "animate__fadeOutLeft"
                  }`}
                >
                  بهترین تحصیلات
                </h2>
              </div>
              <div>
                <h3
                  className={`animate__animated ${
                    isActive
                      ? "animate__fadeInUp animate__delay-1s"
                      : "animate__fadeOutLeft"
                  }`}
                >
                  برای آینده بهتر خودت
                </h3>
              </div>
              <div>
                <p
                  className={`animate__animated  ${
                    isActive
                      ? "animate__fadeInUp animate__delay-2s"
                      : "animate__fadeOutLeft"
                  }`}
                >
                  ما همیشه بهترین خدمات خود را برای مشتریان خود ارائه می دهیم
                </p>
                <p
                  className={`animate__animated ${
                    isActive
                      ? "animate__fadeInUp animate__delay-2s"
                      : "animate__fadeOutLeft"
                  }`}
                >
                  و همیشه سعی در جلب اعتماد و رضایت مشتریان خود داریم.
                </p>
              </div>
              <div>
                <button
                  className={`animate__animated  ${
                    isActive
                      ? "animate__fadeInUp animate__delay-3s"
                      : "animate__fadeOutDown"
                  }`}
                >
                  درخواست
                </button>
              </div>
            </div>
          </div>
        )}
      </SwiperSlide>
    </Swiper>
  );
};
export default Slide;
