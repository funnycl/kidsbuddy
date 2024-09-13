import LogoutIcon from "@mui/icons-material/Logout";
import { getAuth } from "firebase/auth";
import { useLogin } from "../store/useLogin";
import "./MyInfoSummary.scss";

export const MyInfoSummary = () => {
  const auth = getAuth();
  const { isLogin } = useLogin();

  return (
    <div className="my-info-summary relative">
      MyInfoSummary
      {isLogin && (
        <div
          className="cursor-pointer absolute top-1 right-1"
          onClick={() => auth.signOut()}
        >
          <LogoutIcon />
        </div>
      )}
    </div>
  );
};
