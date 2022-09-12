import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SERVER_URL } from "../../App";
import Card from "../../components/card/Card";
import ChangePassword from "../../components/changePassword/ChangePassword";
import Loader from "../../components/Loader/Loader";
import { selectUser } from "../../redux/features/auth/authSlice";

const ProfileUpdate = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const user = useSelector(selectUser);
  const { email } = user;

  useEffect(() => {
    if (!email) {
      console.log("No user data");
      navigate("/profile");
    }
  }, [email, navigate]);

  const initialState = {
    name: user?.name,
    email: user?.email,
    phone: user?.phone,
    bio: user?.bio,
    photo: user?.photo,
    password: "",
  };
  const [profile, setProfile] = useState(initialState);
  const [profileImage, setProfileImage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const saveProfile = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      let imageURL;
      // Check Image format
      if (
        profileImage &&
        (profileImage.type === "image/jpeg" ||
          profileImage.type === "image/png" ||
          profileImage.type === "image/jpg")
      ) {
        // Upload the image
        const image = new FormData();
        image.append("file", profileImage);
        image.append("upload_preset", "pvpv4gnl");
        image.append("cloud_name", "zinotrust");

        // First, save the image to cloudinary
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/zinotrust/image/upload",
          { method: "post", body: image }
        );
        const imgData = await response.json();
        imageURL = imgData.url.toString();
      }

      // Save Profile
      const formData = {
        name: profile.name,
        phone: profile.phone,
        bio: profile.bio,
        photo: profileImage ? imageURL : profile.photo,
      };

      console.log(formData);
      const { data } = await axios.patch(
        `${SERVER_URL}/api/users/updateuser`,
        formData
      );
      toast.success("Profile Updated");
      navigate("/profile");

      console.log(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div className="profile --my2">
      {isLoading && <Loader />}
      <Card cardClass={"card --flex-dir-column"}>
        <span className="profile-photo">
          <img src={user?.photo} alt="profilepic" />
        </span>

        <form className="--form-control" onSubmit={saveProfile}>
          <span className="profile-data">
            <p>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleInputChange}
              />
            </p>
            <p>
              <label>Email:</label>
              <input type="email" value={profile.email} disabled />
              <br />
              <code>Email cannot be changed.</code>
            </p>
            <p>
              <label>Phone:</label>
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleInputChange}
              />
            </p>
            <p>
              <label>Bio:</label>
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleInputChange}
                cols="30"
                rows="10"
              ></textarea>
            </p>
            <p>
              <label>Photo:</label>

              <input
                type="file"
                // accept="image/*"
                name="image"
                onChange={(e) => handleImageChange(e)}
              />
            </p>
            <div>
              <button className="--btn --btn-primary --mt">Save Changes</button>
            </div>
          </span>
        </form>
      </Card>
      <br />
      <ChangePassword />
    </div>
  );
};

export default ProfileUpdate;
