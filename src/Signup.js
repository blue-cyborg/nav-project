import React from 'react';
import Kermit from './Kermit';
import Footer from './Footer';
import "./SignUp.css";

  
export default function SignUp() {

  function handleSubmit(event) {
    event.preventDefault();
    alert("Awesome we will send you cool emails");
  }
  return (
    <div className='SignUp'>
    <div className="container"
    >
      <h1>Sign Up</h1>
      <section>
      <div className="row">
        <div className='col'>
      <Kermit />
      </div>
      <div className='col'>
      <p>sign up for fun things and emails here!</p>
      <p>We want to send you emails about our sales and events</p>
      <p>Yay email!</p>
      <form className="suForm mt-4" onSubmit={handleSubmit}>
      <input type="text" className="suField" placeholder="Enter your email" />
      <input type="submit" className="suSubmit" value="Enter" />
    </form>
      </div>
      </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};
