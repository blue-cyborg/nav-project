import React from 'react';
import "./Signin.css"
import Superfriends from './Superfriends';
import Footer from './Footer';

export default function Signin() {
    function handleSubmit(event) {
    event.preventDefault();
    alert("Hello! You are now logged in");
  }

  return (
    <div className='Signin'>
    <div className="container"
    >
           <h1>Welcome Back</h1>
      <h2 className='account mb-5'>please login to your Super Friends! account</h2>
      <section>
      <div className="row">
        <div className='col'>
      <Superfriends />
      </div>
      <div className='col'>

    <form className="Form" onSubmit={handleSubmit}>
      <input type="text" className="Username mb-3" placeholder="Username" />
      <br />
      <input type="password" className="Password mb-3" placeholder="Password" />
      <br />
      <input type="submit" className="Button w-100" value="Login" />
    </form>
      </div>
      </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};
