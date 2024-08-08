import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import axios from "axios";
import config from "../config";

const implementationProgress = [
  {
    step: 1,
    content: "Đăng kí học bổng",
  },
  {
    step: 2,
    content: "Xét duyệt hồ sơ",
  },
  {
    step: 3,
    content: "Ký hợp đồng",
  },
  {
    step: 4,
    content: "Nhận học bổng",
  },
];

function AboutUs() {
  const [contentMainData, setContentMainData] = useState();
  const [bannerData, setBannerData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [statisticalData, setStatisticalData] = useState({});

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [staticalRes, mainContentRes, bannerRes] = await Promise.all([
          axios.get(config.host + `/statistical`),
          axios.get(config.host + `/post-user`),
          axios.get(config.host + `/banner`),
        ]);

        if (staticalRes.data.status === true) {
          setStatisticalData(staticalRes.data);
        }
        if (mainContentRes.data.status === true) {
          setContentMainData(mainContentRes.data.data.contentMain);
        }
        if (bannerRes.data.status === true) {
          setBannerData(bannerRes.data.list);
        }
      } catch (error) {
        console.error("Lỗi khi fetch dữ liệu:", error);
      }
    };

    fetchAllData();
  }, []);

  function formatCurrency(amount) {
    if (amount >= 1e12) {
      return (amount / 1e12).toFixed(0) + " nghìn tỷ đồng";
    } else if (amount >= 1e9) {
      return (amount / 1e9).toFixed(0) + " tỷ đồng";
    } else if (amount >= 1e6) {
      return (amount / 1e6).toFixed(0) + " triệu đồng";
    } else if (amount >= 1e3) {
      return (amount / 1e3).toFixed(0) + " nghìn đồng";
    } else {
      return amount.toFixed(0) + " đồng";
    }
  }

  return (
    <>
      <main>
        {/* START BANNER SLIDER */}
        <div className="mt-14 md:mt-0 md:tw-banner-slider">
          <Swiper
            className="md:h-calc"
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            slidesPerView={1}
          >
            {bannerData &&
              bannerData.length > 0 &&
              bannerData
                .filter(
                  (item) => item.name == "banner-main" && item.status === 1
                )
                .map((bannerImage, index) => (
                  <SwiperSlide key={bannerImage.id}>
                    <Link title={bannerImage.title} to={`${bannerImage.url}`}>
                      <img
                        loading="preload"
                        key={bannerImage.id}
                        src={config.img + bannerImage.picture}
                        alt={`banner_${index}`}
                        effect="blur"
                        className="object-cover w-full h-full"
                      />
                    </Link>

                    {/* <img
                      key={bannerImage.id}
                      src={config.img + bannerImage.picture}
                      alt={`banner_${index}`}
                      effect="blur"
                      className="object-cover w-full h-full"
                    /> */}
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
        {/* END BANNER SLIDER */}

        {/* START ABOUT US  CONTENT */}
        <section className="home-container flex flex-col items-center mt-5 px-7 md:px-24 md:text-xl md:leading-8 text-base text-justify">
          <div className="main-content ">
            <div dangerouslySetInnerHTML={{ __html: contentMainData }}></div>
          </div>
        </section>
        {/* END ABOUT US  CONTENT */}

        {/* START PROGRESS */}
        <section className="home-container">
          <h1 className="text-2xl md:text-3xl font-semibold text-center mt-16 mb-20 uppercase">
            Quy trình thực hiện
          </h1>
          <div className="grid grid-cols-1 gap-8 px-24 md:grid-cols-2 lg:grid-cols-4 md:gap-14 md:px-16">
            {implementationProgress.map((item, index) => (
              <div
                key={item.step}
                className="relative flex items-center justify-center"
              >
                <div className=" min-w-44 min-h-44 w-full h-full bg-blue-300 flex mb-12 md:mb-0 items-center justify-center rounded-xl text-lg shadow-md last:mb-0">
                  {item.content}
                </div>
                <div className="absolute -top-10 md:-top-6 text-lg bg-blue-500 w-12 h-12 tw-flex-center rounded-full text-white">
                  {item.step}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* END PROGRESS */}

        {/* START INFO */}
        <section className="home-container py-8 mx-auto mt-8">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl md:text-3xl md:mb-12 pb-8 font-semibold uppercase">
              Kết quả đạt được
            </h1>
          </div>
          <div className="grid grid-cols-2 lg:flex lg:justify-center gap-5 md:gap-8 lg:gap-12 justify-items-center px-8">
            {statisticalData && (
              <>
                <div className="flex flex-col items-center justify-center gap-3 rounded md:gap-5 bg-white shadow-sm md:shadow-md border border-slate-100 max-w-44 md:max-w-full w-full py-2 md:p-5">
                  <div className="max-w-20 w-14 md:w-full h-full aspect-auto ">
                    <LazyLoadImage
                      src={"./infoImages/info-1.png"}
                      alt="info-image"
                    />
                  </div>
                  <div className="flex flex-col  items-center md:text-lg">
                    <p className="md:text-2xl mb-2 font-semibold">
                      {formatCurrency(Number(statisticalData?.totalFund))}
                    </p>
                    <p>Tổng quỹ xác thực</p>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-3 rounded md:gap-5 bg-white shadow-sm md:shadow-md border border-slate-100 max-w-44 md:max-w-full w-full py-2 md:p-5">
                  <div className="max-w-20 w-14 md:w-full h-full aspect-auto ">
                    <LazyLoadImage
                      src={"./infoImages/info-2.png"}
                      alt="info-image"
                    />
                  </div>
                  <div className="flex flex-col  items-center md:text-lg">
                    <p className="md:text-2xl mb-2 font-semibold">
                      {statisticalData?.count}
                    </p>
                    <p>Học bổng đã trao</p>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-3 rounded md:gap-5 bg-white shadow-sm md:shadow-md border border-slate-100 max-w-44 md:max-w-full w-full py-2 md:p-5">
                  <div className="max-w-20 w-14 md:w-full h-full aspect-auto ">
                    <LazyLoadImage
                      src={"./infoImages/info-3.png"}
                      alt="info-image"
                    />
                  </div>
                  <div className="flex flex-col  items-center md:text-lg">
                    <p className="md:text-2xl mb-2 font-semibold">
                      {statisticalData?.countMember}
                    </p>
                    <p>Doanh nghiệp hỗ trợ</p>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-3 rounded md:gap-5 bg-white shadow-sm md:shadow-md border border-slate-100 max-w-44 md:max-w-full w-full py-2 md:p-5">
                  <div className="max-w-20 w-14 md:w-full h-full aspect-auto ">
                    <LazyLoadImage
                      src={"./infoImages/info-4.png"}
                      alt="info-image"
                    />
                  </div>
                  <div className="flex flex-col  items-center md:text-lg">
                    <p className="md:text-2xl mb-2 font-semibold">
                      {formatCurrency(Number(statisticalData?.totalPaid))}
                    </p>
                    <p>Số tiền đã trao</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
        {/* END INFO */}

        {/* START POSTER BANNER */}
        <section className="mt-6 py-16 px-4 bg-[#fffac2] w-full">
          <h1 className="text-center text-2xl md:text-3xl font-semibold uppercase">
            Thư viện ảnh
          </h1>

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              576: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            className="container mt-16 tw-banner-slider"
          >
            {bannerData &&
              bannerData.length > 0 &&
              bannerData
                .filter(
                  (item) => item.name == "library-images" && item.status === 1
                )
                .map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="w-full bg-white border-md md:max-w-[300px] border-gray-200 rounded-lg">
                      <Link title={item.title} to={`${item.url}`}>
                        <LazyLoadImage
                          src={config.img + item.picture}
                          alt="ho-so-img"
                          effect="blur"
                          className="w-full rounded-tl-lg rounded-tr-lg"
                        />
                      </Link>
                      <div className="p-4 ">
                        <p className="font-semibold">{item.title}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
          </Swiper>
        </section>
        {/* END POSTER BANNER */}
      </main>
    </>
  );
}

export default AboutUs;
