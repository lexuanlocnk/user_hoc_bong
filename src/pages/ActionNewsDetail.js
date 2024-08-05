import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import config from "../config";
import { Breadcrumb } from "antd";

function ActionNewsDetail() {
  const { news } = useParams();
  const [newsData, setNewsData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchNewsData = async () => {
    setIsLoaded(true);
    try {
      const res = await axios.get(config.host + "/news-detail/" + news);
      setNewsData(res.data.data);
      setIsLoaded(false);
    } catch (error) {
      console.error("fetch data error", error);
    }
  };

  useEffect(() => {
    fetchNewsData();
  }, []);

  return (
    <>
      <section className='mt-[54px] w-full h-full p-5 bg-[#f0f0f0]'>
        <div className="container mx-auto max-w-[1100px] rounded-md bg-white py-3 px-4">
          <div className="mb-4">
            {/* <Breadcrumb arrayLink={breadcrumbLink} /> */}
            <Breadcrumb className="text-base breadcrum-custom"
              items={[
                {
                  title: <Link to="/">Trang chủ</Link>,
                },
                {
                  title: <Link to="/hoat-dong">Hoạt động quỹ</Link>,
                },
                {
                  title: newsData.title,
                },
              ]}
            />
          </div>
          <div>
            {isLoaded ? (
              <div className="z-10 tw-flex-center fixed top-0 left-0 w-full h-full">
                <div className="w-10 h-10 border-[5px] rounded-full border-primary border-t-transparent animate-spin "></div>
              </div>
            ) : (
              <div>
                <h2 className="text-xl text-center font-bold text-blue-500">{newsData.title}</h2>
                <div className="">
                  <div
                    dangerouslySetInnerHTML={{ __html: newsData.description }}
                  >
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>

  );
}

export default ActionNewsDetail;