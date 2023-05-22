import React from "react";
import styled from "styled-components";

// responsiveness
import { mobile } from "../Responsive";

// material-ui components
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";

// styled components
const Container = styled.div`
  display: flex;
  background:#F5F3F2;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  
  width:30vw;
  display: flex;
  flex-direction: column;

  margin-left:12vw;
  align-items:flex-start;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 10px 0px;
  text-align: justify;

`;
const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  /* ${mobile({ display: "none" })} */
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#eee" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  height: 50px;
`;

export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo>ETHOS</Logo>
        <Desc>
          Be it clothing, footwear or accessories, SIDD. offers you the ideal
          combination of fashion and functionality for men, women and kids. You
          will realise that the sky is the limit when it comes to the types of
          outfits that you can purchase for different occasions.
        </Desc>
        
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{ marginRight: "10px" }} /> 354, APJ Hall of
          Residence, CET Bhubaneswar
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: "10px" }} /> +91 9668705760
        </ContactItem>
        <ContactItem>
          <MailIcon style={{ marginRight: "10px" }} /> contact@ethos.com
        </ContactItem>
        <ContactItem>
          <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJv2O82V5C_VFVE3EDWtiQTFtAcgTyk6RrEw&usqp=CAU" />
        </ContactItem>
      </Right>
    </Container>
  );
}
