import React, { useState } from "react";
import "../assets/pages/EditProfile.css";
import Header from "../components/Header"; // Import the CSS file for styling

const EditProfile = () => {
  const [profile, setProfile] = useState({
    firstName: "Ayu",
    lastName: "Lestari",
    email: "Ayu@example.com",
  });

  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword((prevPassword) => ({
      ...prevPassword,
      [name]: value,
    }));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log("Profile updated:", profile);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Handle password update logic here
    console.log("Password updated:", password);
  };

  return (
    <>
      <Header />
      <div className="horizontal-line"></div>
      <div className="edit-profile">
        <h1>Edit Profile</h1>
        <div className="edit-forms">
          <form className="profile-form" onSubmit={handleProfileSubmit}>
            <h2>Profile Information</h2>
            <p>Update your account's profile information and email address</p>
            <label>
              First Name
              <input
                type="text"
                name="firstName"
                value={profile.firstName}
                onChange={handleProfileChange}
              />
            </label>
            <label>
              Last Name
              <input
                type="text"
                name="lastName"
                value={profile.lastName}
                onChange={handleProfileChange}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
              />
            </label>
            <button type="submit">Save</button>
          </form>
          <form className="password-form" onSubmit={handlePasswordSubmit}>
            <h2>Update Password</h2>
            <p>Ensure your account is using a long, random password</p>
            <label>
              Current Password
              <input
                type="password"
                name="currentPassword"
                value={password.currentPassword}
                onChange={handlePasswordChange}
              />
            </label>
            <label>
              New Password
              <input
                type="password"
                name="newPassword"
                value={password.newPassword}
                onChange={handlePasswordChange}
              />
            </label>
            <label>
              Confirm Password
              <input
                type="password"
                name="confirmPassword"
                value={password.confirmPassword}
                onChange={handlePasswordChange}
              />
            </label>
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
