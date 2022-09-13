import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getLoginStatus } from "../services/authService";
import { useDispatch } from "react-redux";
import { SET_LOGIN } from "../redux/features/auth/authSlice";

const useRedirectLoggedOutUser = (path) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const redirectLoggedOutUser = async () => {
      const isLoggedIn = await getLoginStatus();
      console.log(isLoggedIn);
      dispatch(SET_LOGIN(isLoggedIn));

      if (!isLoggedIn) {
        toast.info("Session expired, Please Login to continue.");
        navigate(path);
        return;
      }
    };
    redirectLoggedOutUser();
  }, [navigate, path, dispatch]);
};

export default useRedirectLoggedOutUser;
