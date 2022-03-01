import React, { useEffect, useState } from "react";
import "./cards.css";
import Card from "react-tinder-card";

export default function Cards() {
  const [people, setPeople] = useState([]);
  {
    /*CHANGE THIS ONCE I CHANGE THE DATABASE
  useEffect(() => {
    const unsubscribe = database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );
    //the statement below ensures the app is 'unsubscribing' the listeners once they're done listening, otherwise the app could eventually break because we'd potentially have way too many of them.
    return () => {
      unsubscribe();
    };
  }, []);
*/
  }

  return (
    <div>
      <div className="cardsContainer">
        {people.map((person) => (
          <Card
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
