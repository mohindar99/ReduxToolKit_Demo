import React from "react";
import DeleteAllUsers from "./DeleteAllUsers";
import "./UserDetails.css";

const UserDetails = () => {
  return (
    <>
      <div>
        <div className="allign">List Of UserDetails</div>
        <button className="button-68">Add New Users</button>
      </div>
      <ul>
        <li className="main">hi</li>
        <li className="main">hi</li>
      </ul>
      <hr />
      <DeleteAllUsers />
    </>
  );
};

export default UserDetails;
