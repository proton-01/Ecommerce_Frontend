import React from "react";
import styled from "styled-components";

// packages import
import { Link } from "react-router-dom";

// responsiveness
import { mobile } from "../Responsive";

// styled components
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;


export default function CategoryItem({ item }) {
  return (
    <Container>
      {/* <Link to={`/products/${item.cat}`}> */}
      <Link to={`/shop`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <button className="shop_trend_btn" style={{"width":"130px"}}>SHOP NOW</button>
        </Info>
      </Link>
    </Container>
  );
}
