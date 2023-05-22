import React from "react";
import Item from "./Item";
import "../style/trending.css";

import { trending} from "../Data";
import { categories } from "../Data";
import CategoryItem from "../components/CatagoryItem";
import { Link } from "react-router-dom";


export default function Trending() {
    return (
        <div className="trending_container">
            <div>
                <h1>Trending Now</h1>
            </div>

            <div>
                <p style={{"margin-bottom":"0px" , "color":"#767676"}}>We are happy to introduce the new Lawson Collection. These are three quartz models</p>
                <p style={{"margin-top":"3px" , "color":"#767676"}}>designed with simplicity and elegance kept in mind.</p>
            </div>

            <div className="items_container">
            
              {trending.map((item) => (
                 <Item item={item} key={item.id} />
              ))};

            </div>

            <div className="special_shop">
                <div>
                   <img src="images/c13.jpg"></img>
                </div>
                   
                <div className="special_text">
                    <h1>Spring Winter 2022</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur
                         adipiscing elit, sed do eiusmod tempor 
                         incididunt ut labore et dolore magna aliqua. 
                         Quis ipsum suspendisse ultrices gravida. Risus commodo
                     viverra maecenas accumsan lacus vel facilisis.</p>
                    <button className="shop_trend_btn" > <Link to={`/shop`}> SHOP THE TREND</Link></button>
                </div>

            </div>

        </div>
    )
  }