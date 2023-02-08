import React from "react";
import DeleteAllUsers from "./DeleteAllUsers";
import "./UserDetails.css";
import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/userSlice";
import DisplayUsers from "./DisplayUsers";

const UserDetails = () => {
  const dispatch = useDispatch();

  const addNewUser = (name) => { 
    //console.log(name);
    dispatch(addUser(name));
  }

  return (
    <>
      <div className="allign">
        <div>List Of UserDetails :</div>
        <button className="button-68" onClick={()=>addNewUser(fakeUserData())}>Add New Users</button>
      </div>
      <ul>
        <DisplayUsers/>
      </ul>
      <hr />
      <DeleteAllUsers />
    </>
  );
};

export default UserDetails;
