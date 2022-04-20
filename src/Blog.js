import React from "react";
import Writing from "./Writing";
import Footer from "./Footer";

export default function Blogs() {
    return (
      <div className="Blogs">
        <div className="container"
    >
      <h1>Welcome to Blogs</h1>
      <div className="row">
        <div className="col">
          <div className="jottings">
      <strong>Today is 3/22/2022...</strong>
      <p>I am here to write about things. I like stuff. Stuff is awesome! 
        Today the Super Friends and I saved the world. It was the best of times and it was the worst of times.
        We went out for ice cream after. Good times were had by all.
      </p>
          <strong>Today is 3/24/2022...</strong>
      <p>Today Aquaman couldn't make his Roku work. I told him "reboot it or turn it off and then back on again."
        After that it worked. Aquaman was back to streaming shows and eating pancakes again.
      </p>
           <strong>Today is 3/26/2022...</strong>
      <p>I am here to write about things. I like stuff. Stuff is awesome! 
        Today the Super Friends and I saved the world. It was the best of times and it was the worst of times.
        We went out for ice cream after. Good times were had by all.
      </p>
                <strong>Today is 3/28/2022...</strong>
      <p>Today Aquaman couldn't make his Roku work. I told him "reboot it or turn it off and then back on again."
        After that it worked. Aquaman was back to streaming shows and eating pancakes again.
      </p>
      </div>
      </div>
      <div className="col">
        <Writing />
      </div>
      </div>
      </div>

      <Footer />
    </div>
    );
}