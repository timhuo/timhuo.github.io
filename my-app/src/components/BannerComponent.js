import React from "react";
import "../css/BannerComponent.css";

const BannerComponent = () => {
    return (
        <div id="banner">
            <h1>Where Boba Dreams and Stir-Fry Cravings Come Together!</h1>
            <br />
            <br />
            <button className="pri-color"><a style={{color: 'white', textDecoration: 'none'}} href="https://www.clover.com/online-ordering/hitea-cafe-honolulu" target="_blank" rel="noopener noreferrer">ORDER ONLINE</a></button>
        </div>
    )
}

export default BannerComponent;