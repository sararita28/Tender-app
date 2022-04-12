import React from "react";
import Chat from "../../components/chat/Chat";

export default function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Steph"
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
      <Chat
        name="Stella"
        message="Thank you missy, I love your bio too! "
        timestamp="6 hr ago"
        profilePic="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
      />
      <Chat
        name="Steve"
        message="Oh what part? I'm also from Chicago!"
        timestamp="yesterday"
        profilePic="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
      />
      <Chat
        name="Ada"
        message="Same here!"
        timestamp="1 wk ago"
        profilePic="https://vengreso.com/wp-content/uploads/2016/03/LinkedIn-Profile-Professional-Picture-Sample-Bernie-Borges.png"
      />
    </div>
  );
}
