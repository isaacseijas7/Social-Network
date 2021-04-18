import React from "react";
import { Link } from "react-router-dom";
import "./UserItem.scss";

const UserItem = ({ user }) => {
  return (
    <Link to="/" className="user-item">
      <div className="content_user-item">
        <div className="user-item_photo">
          <img
            src="https://i.pravatar.cc/150?img=57"
            alt="avatar"
            srcSet="https://i.pravatar.cc/150?img=57"
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
