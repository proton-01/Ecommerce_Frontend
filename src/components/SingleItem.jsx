import { React, useEffect, useState } from "react";
import "../style/singleItem.css";

import Header from "./Header";
import Announcement from "./Announcment";
import Footer from "./Footer";
import Star from "./Star";
import { Link, useLocation } from "react-router-dom";

import { addToCart } from "../redux/cart/cartActions";
import { useDispatch, useSelector } from "react-redux";

import { products } from "../Data";
import exchange from "../img/exchange.png";
import freedelivery from "../img/freedelivery.png";
import warrenty from "../img/warrenty.png";
import man from "../img/man.png";
import watch from "../img/cc2.jpg";

import { ADD_COMMENT } from "../redux/comment/commentActions";
import { addComment } from "../redux/comment/commentActions";
import axios from "axios";




function SingleItem() {

  const dispatch = useDispatch();
  const [btnText, setBtnText] = useState("Add To Cart");
  const [comment ,setComment] = useState("");

  const loggedInUser = useSelector(state=>state.auth.loggedInUser);
  const noOfComments = useSelector(state=>state.comment.noOfComments);
  const comments = useSelector(state=>state.comment.comments);
  let name = sessionStorage.getItem('userNow')
  console.log(noOfComments);
  console.log(comments);
  // let name = sessionStorage.getItem('userNow')
  
  // id and item object related
  const location = useLocation();
  const curId = location.pathname.slice(6);
  const item = products[curId-1];
  console.log(item)

  const [commentsArray, setcommentsArray] = useState()
  console.log(commentsArray);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/review/getReviews?productId=${item.id}`, {
    }).then((response) => {
      setcommentsArray(response.data.response.reviews);
    });
  }, [])
  

  const showComment = ()=>{
    if(!loggedInUser){
      alert("Need to login first !!!");
      return;
    }

    axios.post("http://localhost:5000/api/review/postReview", {
      productId:item.id,
      reviewText:comment,
      postedBy:name,
      starRating:2
      })
      .then((response) => {
        // setPost(response.data);
        console.log(response.data);
      });
   
    console.log('showComment fireeddd!!');
    return(
      dispatch(addComment(comment))
    );
  }


  return (
    <div className="singleitem_container">
      <Announcement />
      <Header />

      <div className="singleitem_main">
        <div className="singleitem_image">
          <img src={watch} alt="img"></img>
        </div>

        <div className="singleitem_details">
          <h2 className="singleitem_details_1">{item.title}</h2>
          <Star stars={item.stars} />
          <p className="singleitem_details_3">
            <strong>{commentsArray?.length}</strong> reviews
          </p>
          <h5 className="singleitem_details_4">MRP : ${item.p2}</h5>
          <h6 className="singleitem_details_5"> Deal Of The Day :<strong style={{ color: "black" }}> ${item.p2 - 10}</strong>
          </h6>
          <p className="singleitem_details_6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos enim
            esse maxime veniam, cumque facilis eveniet temporibus possimus
            aliquid tempora exercitationem, ratione corrupti ipsum odio autem
            explicabo omnis animi culpa.
          </p>

          <div className="singleitem_details_7">
            <div>
              <img src={freedelivery} alt="free-deklivery"></img>
              <p>Free Delivery</p>
            </div>
            <div>
              <img src={exchange} alt="free-deklivery"></img>
              <p>30 Days Replacment</p>
            </div>
            <div>
              <img src={warrenty} alt="free-deklivery"></img>
              <p>3 Years Warrenty</p>
            </div>
          </div>

          <div className="singleitem_buttons">
            <button
              onClick={() => {
                setBtnText("Item Added To Cart");
                dispatch(addToCart(item));
              }}
            >
              {btnText}
            </button>
            <button>
              <Link to="/cart">View Cart</Link>{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="singleitem_review">
        <div className="review_input_cont">
          <input placeholder="Write your feedback here" onChange={(e)=>{setComment(e.target.value);}} ></input>
          <button onClick={showComment} >Post Comment</button>
        </div>

  
        <div className="review_cont_upperdiv">
        
        <div className="review_cont">
               {
                comments.map((comment,index)=>{
                  return ( 
                    <div className="review_box" key={index}>
                        <div className="author_cont">
                         <img src={man}></img>
                         <h5 className="author">{name}</h5>
                        </div>
                       <p className="comment">{comment.text}</p>
                    </div>
                  )
            
                 })
              }              
        </div>

        <div className="review_cont">
               {
                commentsArray?.map((comment,index)=>{
                  return ( 
                    <div className="review_box" key={index}>
                        <div className="author_cont">
                         <img src={man}></img>
                         <h5 className="author">{comment.postedBy}</h5>
                        </div>
                       <p className="comment">{comment.reviewText}</p>
                    </div>
                  )
            
                 })
              }              
        </div>

        </div>

      </div>

      <Footer />
    </div>
  );
}

export default SingleItem;
