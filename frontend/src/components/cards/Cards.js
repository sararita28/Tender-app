import React, { useEffect, useState } from "react";
import "./cards.css";
import Card from "react-tinder-card";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Cards() {
  const onSwipe = (direction) => {
    console.log(`You swiped ${direction}`);
  };

  const onCardLeftScreen = (name) => {
    console.log(`${name} left the screen`);
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const res = await axios.get("/cards");
      setUsers(res.data);
    };
    fetchCards();
  }, []);

  return (
    <div>
      <div className="cardsContainer">
        {users.map((user) => (
          <div>
            {/*<Link to={`/users/${user._id}`}>*/}
            <Card
              className="swipe"
              key={user.name}
              preventSwipe={["up", "down"]}
              onSwipe={onSwipe}
              onCardLeftScreen={() => onCardLeftScreen(user.name)}
            >
              <div className="card">
                {/*{user.bio.substring(0, 750)}...*/}
                {user.bio}
                <h3 className="cardAuthor">
                  {user.name}, {user.age} <br />
                  {user.gender}
                </h3>
              </div>
            </Card>
            {/*</Link>*/}
          </div>
        ))}
      </div>
    </div>
  );
}
