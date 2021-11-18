import React from "react";

const Hero = ({handleLogout})=>{

    return(
        <section>
            <nav>
               <h2>Welcome to React</h2>
               <button onClick={handleLogout}>Logout</button> 
            </nav>

        </section>
    );

};

export default Hero;