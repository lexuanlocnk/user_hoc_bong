import { useEffect, useState } from "react";
import SignIn from "../component/Auth/SignIn";
import SignUp from "../component/Auth/SignUp";

function Auth() {
  const [isShowSignInBox, setIsShowSignInBox] = useState(true)
  return (
    <>
      <div className="w-full h-full">
        {isShowSignInBox && <SignIn setIsShowSignInBox={setIsShowSignInBox} />}
        {!isShowSignInBox && <SignUp setIsShowSignInBox={setIsShowSignInBox} />}
      </div>
    </>
  );
}

export default Auth;
