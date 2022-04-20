import React from "react";
import Nachos from "./Nachos";
import Footer from "./Footer";

export default function Events() {
    return (
    <div
    >
      <h1>Welcome to Events</h1>
      <section>
      <h2>Nacho Party</h2>
      <p>The Nacho Party event is 3:30 pm on Friday. It will be at a place.
          Please stop in. It will be fun. There will be nachos. Pay $5 at the door.</p>
          <Nachos />
          </section>
          <Footer />
    </div>
  );
}
