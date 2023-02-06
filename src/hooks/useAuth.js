// for using client state
// 전역적으로 Auth(인증상태정보)를 사용하기 위해서, 커스텀 훅을 만든다
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
