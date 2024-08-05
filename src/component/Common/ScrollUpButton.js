import { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

function ScrollUpButton() {
  const [isShowScrollUpBtn, setIsShowScrollUpBtn] = useState(false);

  useEffect(() => {
    const checkIfShowScrollUpBtn = () => {
      const scrollOffset = document.documentElement.scrollTop;
      if (scrollOffset > 500) {
        setIsShowScrollUpBtn(true);
      } else {
        setIsShowScrollUpBtn(false);
      }
    };

    window.addEventListener("scroll", checkIfShowScrollUpBtn);

    return () => window.removeEventListener("scroll", checkIfShowScrollUpBtn);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-[35px] right-[30px] z-10 transition duration-500 animate-bounce ${!isShowScrollUpBtn && "hidden opacity-0  pointer-events-none"
        }`}
    >
      <BsFillArrowUpCircleFill
        size={35}
        className={"text-primary hover:brightness-75 transition duration-300"}
      />
    </button>
  );
}

export default ScrollUpButton;
