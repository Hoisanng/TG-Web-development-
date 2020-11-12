import React from "react";
import Main from './Main';
import Werk from './Werk';
import School from './School';
import Activiteiten from './Activiteiten';
import Interesses from './Interesses';
import Footer from './Footer';


function Home() {
    return (
        <>
            <Main />
            <Werk />
            <School />
            <Activiteiten />
            <Interesses />
            <Footer />
        </>
    )
}

export default Home;