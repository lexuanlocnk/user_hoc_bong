import { FaLocationDot } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { TfiYoutube } from "react-icons/tfi";
import { FiTwitter } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { IoEarth } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo_NguyenKim_ao.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config";

const listParner = [
  {
    id: 1,
    title: "Nhà phân phối uy tín chât lượng hàng đầu",
    child: [
      {
        id: 1,
        image:
          "http://mediank.ketnoi365.com/uploads/weblink/_80x80___nhabanle-4.png",
        link: "#",
      },
      {
        id: 2,
        image:
          "http://mediank.ketnoi365.com/uploads/weblink/_80x80___nhabanle-1.png",
        link: "#",
      },
      {
        id: 3,
        image:
          "http://mediank.ketnoi365.com/uploads/weblink/_80x80___nhabanle-2.png",
        link: "#",
      },
      {
        id: 4,
        image:
          "http://mediank.ketnoi365.com/uploads/weblink/_80x80___nhabanle-3.png",
        link: "#",
      },
    ],
  },
  {
    id: 2,
    title: "Chứng nhận đối tác",
    child: [
      {
        id: 1,
        image: "http://mediank.ketnoi365.com/uploads/weblink/logo-ms-soft.png",
        link: "/gioi-thieu/chung-nhan-doi-tac",
      },
      {
        id: 2,
        image: "http://mediank.ketnoi365.com/uploads/weblink/logo-hp.png",
        link: "/gioi-thieu/chung-nhan-doi-tac",
      },
      {
        id: 3,
        image: "http://mediank.ketnoi365.com/uploads/weblink/logo-fujitsu.png",
        link: "/gioi-thieu/chung-nhan-doi-tac",
      },
      {
        id: 4,
        image: "http://mediank.ketnoi365.com/uploads/weblink/logo-lenovo.png",
        link: "/gioi-thieu/chung-nhan-doi-tac",
      },
      {
        id: 5,
        image: "http://mediank.ketnoi365.com/uploads/weblink/logo-dell.png",
        link: "/gioi-thieu/chung-nhan-doi-tac",
      },
    ],
  },
];

function Footer() {
  const [footerData, setFooterData] = useState({});

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const res = await axios.get(config.host + `/post-user`);
        if (res.data.status === true) {
          setFooterData(res.data.data);
        }
      } catch (error) {
        console.error("Lỗi khi lấy thông tin chân trang", error);
      }
    };

    fetchFooterData();
  }, []);

  return (
    <section className="w-full h-full flex flex-col  bg-[#1c449c]">
      <div className="home-container flex flex-col md:flex-row justify-between items-center p-8 gap-4  w-full md:p-5 lg:px-20 text-white">
        <div className="max-w-[600px]">
          <h1 className="text-2xl font-semibold text-primary uppercase pb-3 border-b-4 mb-4">
            Quỹ học bổng nguyên kim
          </h1>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <TfiEmail size={20} />
              <p>{footerData?.address_email}</p>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <IoEarth size={22} />
              <p>{footerData?.address_url}</p>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <FaLocationDot size={22} />
              <div>Địa chỉ : {footerData?.address_fund}</div>
            </div>
          </div>

          <div className="mb-4">
            <div
              dangerouslySetInnerHTML={{ __html: footerData?.contentFooter }}
            ></div>
          </div>
          <div className="flex gap-5 mb-4">
            <Link
              rel="nofollow"
              title="facebook"
              to="https://www.facebook.com/vitinhnguyenkim"
              className="p-2 text-blue-400 bg-white rounded-full hover:bg-blue-400 hover:text-white duration-300 transition"
            >
              <FiFacebook size={20} />
            </Link>
            <Link
              rel="nofollow"
              title="youtube"
              to="https://www.youtube.com/@nguyenkimcomputer2004"
              className="p-2 text-red-400 bg-white rounded-full hover:bg-red-400 hover:text-white duration-300 transition"
            >
              <TfiYoutube size={20} />
            </Link>
            <Link
              rel="nofollow"
              title="twitter"
              to="https://twitter.com/"
              className="p-2 text-blue-400 bg-white rounded-full hover:bg-blue-400 hover:text-white duration-300 transition"
            >
              <FiTwitter size={20} />
            </Link>
          </div>
          <div className=" relative">
            <input
              type="text"
              name="femail"
              defaultValue={""}
              className="px-3 py-2 rounded-md border w-full outline-1 focus:outline-blue-500 text-black"
              placeholder="Địa chỉ email của bạn"
            />
            <div className="absolute top-[20%] right-[5%] text-green-600 ">
              <IoIosSend size={25} />
            </div>
          </div>
        </div>
        <div>
          <div>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fvitinhnguyenkim%3Fref%3Dembed_page&tabs=timeline&width=340&height=70&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
              width="340"
              height="150"
              style={{ border: "none", overflow: "hidden" }}
              loading="lazy"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>

          <div style={{ width: "100%" }}>
            <iframe
              width="100%"
              height="200"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=245B%20Tr%E1%BA%A7n%20Quang%20Kh%E1%BA%A3i,%20Ph%C6%B0%E1%BB%9Dng%20T%C3%A2n%20%C4%90%E1%BB%8Bnh,%20Qu%E1%BA%ADn%201,%20TP.%20H%E1%BB%93%20Ch%C3%AD%20Minh+(C%C3%B4ng%20Ty%20TNHH%20Vi%20T%C3%ADnh%20Nguy%C3%AAn%20Kim)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps vehicle tracker</a>
            </iframe>
          </div>
        </div>
      </div>

      {/* <div className="home-container w-full flex flex-col bg-white py-[16px] lg:flex-row lg:py-[20px] lg:px-[80px] justify-between items-center  ">
        <div className="max-w-[350px] mb-4 md:flex md:flex-col md:items-center lg:items-start">
          <div className="w-[40%] h-[60%]">
            <LazyLoadImage
              src={Logo}
              alt="logo nguyen kim"
              className="w-full h-full object-fill"
            />
          </div>
          <div className="mt-2">
            Phân phối các sản phẩm công nghệ thông tin toàn diện.
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          {listParner.map((item, index) => (
            <div key={index}>
              <label className="font-semibold text-orange-600 ">
                {item.title}
              </label>
              <div className="flex gap-3 mt-3">
                {item.child.map((items, indexs) => (
                  <Link key={indexs} rel="nofollow" to={`${items.link}`}>
                    <LazyLoadImage
                      className="max-w-[80px] w-[60px]"
                      key={items.id}
                      alt={item.title}
                      src={items.image}
                      loading="lazy"
                    />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}

export default Footer;
