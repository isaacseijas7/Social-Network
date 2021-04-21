import React from "react";
import { Link } from "react-router-dom";
import "./UserItem.scss";
import imagUser from "./../../../assets/img/user.jpg";

const UserItem = ({ user }) => {
  return (
    <Link to="/" className="user-item">
      <div className="content_user-item">
        <div className="user-item_photo">
          <img
            src={imagUser}
            alt="avatar"
            srcSet={imagUser}
          />
        </div>
        <div className="user-item_details">
          <div className="username">{user.username}</div>
          <div className="full_name">{user.full_name}</div>
        </div>
      </div>
    </Link>
  );
};

export default UserItem;
