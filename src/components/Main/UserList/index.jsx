import React from "react";
import UserItem from "components/Main/UserItem";

const UserList = ({ users }) => {
  return (
    <>
      {Array.isArray(users) && (
        <div className="UserList">
          {users.map((user, key) => (
            <UserItem user={user} key={key} />
          ))}
        </div>
      )}
    </>
  );
};

export default UserList;
