import React from "react";
import Header from "../../components/header/Header";
import SingleChat from "../../components/singleChat/SingleChat";

export default function Conversation() {
  return (
    <div>
      <Header backButton="/chats" />
      <SingleChat />
    </div>
  );
}
