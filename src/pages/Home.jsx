import React from "react";

import Header from "../components/Header";
import Announcement from "../components/Announcment";
import Slider from "../components/Slider";
import Catagories from "../components/Catagories";
import Footer from "../components/Footer";
import Trending from "../components/Trending";


function Home(){
    return(
         <div className="home">
            <Announcement/>
            <Header/>
            {/* <Slider/> */}
            <Catagories/>
            <Trending/>
            <Footer/>
         </div>
    );

}
export default Home;