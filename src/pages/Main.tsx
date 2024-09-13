import { Link } from "react-router-dom";
import { MyInfoSummary } from "../components/MyInfoSummary";
import { useLogin } from "../store/useLogin";

export const Main = () => {
  const { isLogin } = useLogin();
  if (!isLogin) {
    return (
      <div>
        <div className="p-5">
          <div className="pb-3">로그인이 필요합니다.</div>
          <Link to="/login">로그인 페이지로 가기</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mobile-container">
      <MyInfoSummary />
    </div>
  );
};
