import { useEffect } from "react";

import { axiosPrivate } from "../api/axios";
import useRefreshToken from "./useRefreshToken"; // for refreshing client state
import useAuth from "./useAuth"; // for using client state

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  // if the auth and refresh is changed, the interceptors will be used.
  // the interceptors will inspect whether the token is expired.
  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        console.log(
          "\x1b[34museAxiosPrivate    requestInterceptor config : ",
          config
        );
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.accessToken}`; // set the accessToken
        }
        return config;
      },
      (error) => {
        console.log(
          "\x1b[34museAxiosPrivate    requestInterceptor error : ",
          error
        );
        return Promise.reject(error);
      }
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => {
        console.log(
          "\x1b[34museAxiosPrivate    responseInterceptor response : ",
          response
        );
        return response;
      },
      async (error) => {
        console.log(
          "\x1b[34museAxiosPrivate    responseInterceptor error : ",
          error
        );
        // console.log(
        //   "\x1b[34museAxiosPrivate    error.response.status : ",
        //   error.response.status
        // );
        const prevRequest = error?.config;
        // response status 에 따라서, axios request 를 한다.
        if (error?.response?.status === 403) {
          console.log("\x1b[34museAxiosPrivate    issuing the new accessToken");
          // if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          // issue the new accessToken
          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`; // replace new token
          // make the request again
          // 실패한 이전요청으로 재요청한다.
          return axiosPrivate(prevRequest);
          // axiosPrivate = axios.create({baseURL,headers,withCredentials,})
        }
        return Promise.reject(error);
      }
    );

    // clean up function
    return () => {
      //   console.log("\x1b[34museAxiosPrivate    clean up interceptors.");
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);

  // axiosPrivate is the instance that will be later merged with REST API(get,post,put,delete)
  return axiosPrivate;
};

export default useAxiosPrivate;
