// for refreshing accessToken and refreshToken
import axios from "../api/axios";
import useAuth from "./useAuth"; // for using client state

/* 16진수 표기법 */
// 30 black / 31 red / 32 green / 33 yellow / 34 blue / 37 white / 0 origin color
const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const BLUE = "\x1b[34m";
const END = "\x1b[0m";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get("/refresh", {
      withCredentials: true,
    });

    setAuth((prev) => {
      console.log(`${BLUE}useRefreshToken  previous hooks.state : ${prev}`);
      return { ...prev, accessToken: response.data.accessToken }; // remember that the acceccToken is overwrited.
    });
    console.log(`${BLUE}useRefreshToken  response.data : ${response.data}`);

    // set the accessToken to response
    return response.data.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
