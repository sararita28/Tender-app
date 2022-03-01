import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./singleChat.css";

export default function SingleChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Bill",
      image:
        "https://pbs.twimg.com/media/DZotU1hW0AEDN5F?format=jpg&name=large",
      message: "Hi love",
    },
    {
      name: "Bill",
      image:
        "https://pbs.twimg.com/media/DZotU1hW0AEDN5F?format=jpg&name=large",
      message: "How've you been?",
    },
    {
      message: "Oh hi Bill! Long time no see!",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="singleChat">
      <p className="singleChatMatchDate">
        YOU MATCHED WITH BILL ON 0 2/04/2021
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="singleChatMessage">
            <Avatar
              className="singleChatImg"
              alt={message.name}
              src={message.image}
            />

            <p className="singleChatText">{message.message}</p>
          </div>
        ) : (
          <div className="singleChatMessage">
            <p className="singleChatTextAdmin">{message.message}</p>
          </div>
        )
      )}
      <form onSubmit={handleSubmit} className="singelChatInputForm">
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Type a message..."
          className="singelChatInputField"
        />
        <button type="submit" className="singelChatInputBtn">
          Send
        </button>
      </form>
    </div>
  );
}
