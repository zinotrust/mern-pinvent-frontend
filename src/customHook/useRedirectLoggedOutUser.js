import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { selectIsLoggedIn } from "../redux/features/auth/authSlice";

const useRedirectLoggedOutUser = (path) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    const redirectLoggedOutUser = () => {
      if (!isLoggedIn) {
        toast.info("Session expired, Please Login to continue.");
        navigate(path);
        return;
      }
    };
    redirectLoggedOutUser();
  }, [isLoggedIn, navigate, path]);
};

export default useRedirectLoggedOutUser;
