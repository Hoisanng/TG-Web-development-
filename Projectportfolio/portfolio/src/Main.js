import React from "react";
import { Link } from "react-router-dom";

function Main() {
    return (
    
            <div className="content-wrapper">
                <div className="naam">Hoisan Ng</div>
                <div className="container">
                    <div className="plaats"> Amsterdam, Nederland.</div>
                    <div className="maintext">Humana isn't perfect and is not for perfect human beings, nor do we have to pretend to be. We are here to build better futures.</div>
                </div>
                <Link to="/main"><div className="verwijzing">Lees meer →</div></Link>
            </div>
        
    )
}
export default Main;

// function Home () {

// }

// export default Home;