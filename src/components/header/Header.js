import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectName, SET_LOGIN } from "../../redux/features/auth/authSlice";
import { logoutUser } from "../../services/authService";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useSelector(selectName);

  const logout = async () => {
    await logoutUser();
    dispatch(SET_LOGIN(false));
    navigate("/login");
  };

  return (
    <header className="--pad header">
      <div className=" --flex-between">
        <h3>
          <span className="--fw-thin">Welcome, </span>
          <span className="--color-danger">{name} </span>
        </h3>
        <button onClick={logout} className="--btn --btn-danger">
          Logout
        </button>
      </div>
      <hr />
    </header>
  );
};

export default Header;
