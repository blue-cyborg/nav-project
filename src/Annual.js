import React from "react";
import "./annualtable.css"
import Cardgage from "./Cardgage";
import Footer from "./Footer";

export default function AnnualReport() {
    return (
        <div className="AnnualReport">
        <div className="container"
      >
          <h1>Annual Report</h1>

                  <h2>Numbers...Refinancing...%%%...</h2>
                  <Cardgage />

            <div className="Table mt-3">
            <h3>This Awesome Random Frequency Table About Cake</h3>
             <div className="row row-cols-2">
                 <div className="col name">Kind of Cake Bought</div>
                 <div className="col name">Frequency Purchased</div>
                 <div className="col">Red Velvet</div>
                 <div className="col">20</div>
                 <div className="col">Marble Cake</div>
                 <div className="col">6</div>
                 <div className="col">Vanilla Cake</div>
                 <div className="col">2</div>
                 <div className="col">Tiramisu</div>
                 <div className="col">16</div>
                 <div className="col">Strawberry Shortcake</div>
                 <div className="col">6</div>
                 <div className="col">Chocolate Lava Cake</div>
                 <div className="col">6</div>
                 <div className="col">Lemon Cake</div>
                 <div className="col">12</div>
            </div>
        </div>
    </div>
    <Footer />
    </div>
    );
}