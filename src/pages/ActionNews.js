import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

import { Pagination } from "antd";
import axios from "axios";
import config from "../config";
import { useEffect, useState } from "react";

function ActionNews() {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState();
  const [pageTotal, setPageTotal] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    fetchNewsData();
  }, [currentPage]);

  const fetchNewsData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(config.host + `/news/2?page=${currentPage}`);
      if (res.data.status === true) {
        setNewsData(res.data.data.data);
        setCurrentPage(res.data.data.current_page);
        setPageTotal(res.data.data.total);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("fail to fetch data.");
    }
  };

  return (
    <>
      {isLoading && (
        <div className="z-10 tw-flex-center fixed top-0 left-0 w-full h-full">
          <div className="w-10 h-10 border-[5px] rounded-full border-primary border-t-transparent animate-spin "></div>
        </div>
      )}

      <section className="container mx-auto mt-14 md:mt-0 px-5 md:px-12 py-14 md:flex md:flex-col">
        <h1 className="text-center uppercase text-2xl md:text-3xl font-semibold">
          Hoạt động quỹ
        </h1>

        {!isLoading && (
          <div className="grid grid-cols-1 gap-10 my-8 md:gap-5 md:grid-cols-4 md:justify-items-center md:mt-8 ">
            {newsData &&
              newsData.length > 0 &&
              newsData.map((item) => (
                <div
                  key={item.id}
                  className="container flex md:flex-col justify-center rounded border border-slate-200 hover:shadow-md hover:scale-105 transition duration-300"
                >
                  <div className="w-[30%] md:w-full md:h-48  relative overflow-hidden">
                    <LazyLoadImage
                      src={`${config.img}/${item.picture}`}
                      alt={`hoat dong ${item.id}`}
                      className="object-cover w-full h-full absolute inset-0 rounded-tl rounded-bl md:rounded-tl md:rounded-tr md:rounded-bl-none"
                    />
                  </div>

                  <div className="flex-1 flex flex-col items-center gap-2 justify-center p-2">
                    <Link
                      to={`/hoat-dong/${item.friendly_title}`}
                      className="text-base font-semibold leading-normal hover:text-blue-500 transition duration-300 tw-multiline-ellipsis-2"
                    >
                      {item.title}
                    </Link>
                    <p className="hidden text-[14px] text-gray-500 md:block tw-multiline-ellipsis-2">
                      {item.short}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        )}

        <div className="tw-flex-center mt-8">
          <Pagination
            current={currentPage}
            pageSize={3}
            total={pageTotal}
            onChange={(page) => setCurrentPage(page)}
          />
        </div>
      </section>
    </>
  );
}

export default ActionNews;
