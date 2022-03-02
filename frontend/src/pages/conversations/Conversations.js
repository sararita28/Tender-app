import React from "react";
import Header from "../../components/header/Header";
import Chats from "../chats/Chats";

export default function Conversations() {
  return (
    <div>
      <Header backButton="/" />
      <Chats />
    </div>
  );
}
