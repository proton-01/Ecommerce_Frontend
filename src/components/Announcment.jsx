import React from "react";
import styled from "styled-components";

// styled components
const Container = styled.div`
  height: 50px;
  background-color: black;
  color: #C5C5C5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  position: fixed;
  width: 100%;
  z-index: 3;
`;

export default function Announcement() {
  return <Container>

    <marquee direction="left">special offers every week! 40% Off!   Best deal , free shipping and more!</marquee>
      
    </Container>;
}