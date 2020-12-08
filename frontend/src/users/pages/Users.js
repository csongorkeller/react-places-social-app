import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Csongor Keller",
      image:
        "https://images.unsplash.com/photo-1602524815375-a54449bb00fb?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      places: 3,
    },
  ];
  return <UsersList items={USERS}/>;
};

export default Users;
