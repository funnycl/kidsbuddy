import { Link } from "react-router-dom";
import { AdminHeader } from "../components/admin/AdminHeader";
import { AdminSideMenu } from "../components/admin/AdminSideMenu";
import { useLogin } from "../store/useLogin";

export const Admin = () => {
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
    <div>
      <AdminHeader />
      <div>
        <AdminSideMenu />
      </div>
    </div>
  );
};
