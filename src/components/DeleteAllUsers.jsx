import React from "react";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/slices/userSlice"

const DeleteAllUsers = () => {
  const dispatch = useDispatch();

  const deleteAllUsers = () => {
    dispatch(deleteUsers());
  }

  return (
    <button onClick={deleteAllUsers}>clear    users</button>
  );
};

export default DeleteAllUsers;
