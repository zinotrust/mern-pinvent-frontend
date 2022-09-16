import React, { useEffect, useState } from "react";
import "./Profile.scss";
import Card from "../../components/card/Card";
import { useDispatch } from "react-redux";
import { SAVE_USER, SET_NAME } from "../../redux/features/auth/authSlice";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { Link } from "react-router-dom";
import { getUser } from "../../services/authService";
import { SpinnerImg } from "../../components/Loader/Loader";

const Profile = () => {
  useRedirectLoggedOutUser("/login");
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    async function getUserData() {
      const data = await getUser();
      // console.log(data);
      setProfile(data);
      setIsLoading(false);
      dispatch(SAVE_USER(data));
      dispatch(SET_NAME(data.name));
    }
    getUserData();
  }, [dispatch]);

  return (
    <div className="profile --my2">
      {isLoading && <SpinnerImg />}
      <>
        {!isLoading && profile === null ? (
          <p>Something went wrong!!!</p>
        ) : (
          <Card cardClass={"card --flex-dir-column"}>
            <span className="profile-photo">
              <img src={profile?.photo} alt="profilepic" />
            </span>

            <span className="profile-data">
              <p>
                <b>Name :</b> {profile?.name}
              </p>
              <p>
                <b>Email :</b>{" "}
                <b className="--color-danger">{profile?.email}</b>
              </p>
              <p>
                <b>Phone :</b> {profile?.phone}
              </p>
              <p>
                <b>Bio :</b> {profile?.bio}
              </p>
              <div>
                <Link to="/profile-update">
                  <button className="--btn --btn-primary --mt">
                    Edit Profile
                  </button>
                </Link>
              </div>
            </span>
          </Card>
        )}
      </>
    </div>
  );
};

export default Profile;
