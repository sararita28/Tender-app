import React from "react";
import Chat from "../../components/chat/Chat";

export default function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Sara"
        message="Hey there!"
        timestamp="35 min ago"
        profilePic="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
      />
      <Chat
        name="Bill"
        message="hahaha I KNOW!"
        timestamp="1 hr ago"
        profilePic="https://pbs.twimg.com/media/DZotU1hW0AEDN5F?format=jpg&name=large"
      />
    </div>
  );
}
