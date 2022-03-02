import React from "react";
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards";
import SwipeButtons from "../../components/swipeButtons/SwipeButtons";

export default function home() {
  return (
    <div>
      <Header />
      <Cards />
      <SwipeButtons />
    </div>
  );
}
