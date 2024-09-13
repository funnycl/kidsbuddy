import LogoutIcon from "@mui/icons-material/Logout";
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
import { useLogin } from "../store/useLogin";
import { useUserInfo } from "../store/useUserInfo";
import "./MyInfoSummary.scss";

export const MyInfoSummary = () => {
  const auth = getAuth();
  const { isLogin } = useLogin();
  const { userInfo } = useUserInfo();

  return (
    <div className="my-info-summary relative">
      <div className=" absolute top-1 right-1 flex gap-1">
        {userInfo.userType === "TEACHER" && (
          <Link to="/admin" className="btn btn-outline-secondary btn-sm">
            학급 관리
          </Link>
        )}
        {isLogin && (
          <div className="cursor-pointer" onClick={() => auth.signOut()}>
            <LogoutIcon />
          </div>
        )}
      </div>
      MyInfoSummary
    </div>
  );
};
