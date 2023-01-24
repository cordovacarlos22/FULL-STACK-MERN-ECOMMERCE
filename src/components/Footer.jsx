import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import { Email, Instagram, Phone, Room, Twitter } from '@mui/icons-material';


const Container = styled.div`
display:flex;
flex-wrap:wrap;


`

const Left = styled.div`
 flex:1;
 display:flex;
 flex-direction:column;
 padding:20px;
 

`

const Logo = styled.h1`

`

const Description = styled.p`
  margin: 20px  0px;
`

const SocialContainer = styled.div`
  display:flex;
  gap:20px;
`

const SocialIcon = styled.div`
 width:40px;
 height:40px;
 border-radius:50%;
 color:white;
 background-color:#${props => props.color};
 display:flex;
 align-items:center;
 justify-content:center;
 cursor:pointer;
`

const Center = styled.div`
 flex:1;
 padding:20px;

`

const Title = styled.h3`
margin-bottom:30px;

`
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;


`

const ListItem = styled.li`
width:50%;
margin:10px 0px;
cursor:pointer;


`
const Right = styled.div`
 flex:1;
 padding:20px;

`

const ContactItem = styled.p`
 margin: 10px 0px;
 display:flex;
 align-items:center;
 padding:5px;
 gap:5px;
`

const Payment = styled.img`
width:35%
`


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>AVE PASEOS BOUTIQUE</Logo>
        <Description>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla pariatur velit omnis quis alias quasi excepturi accusantium facilis consectetur officiis hic repellat voluptatum eius eveniet, reprehenderit nostrum similique harum nihil corporis? Recusandae alias repellendus distinctio iure corporis autem fugit reprehenderit!</Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>
          Useful Links
        </Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Returns</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
         <Title>Contact</Title>
        <ContactItem>
          <Room />
          00001 Resource, Los Angeles CA 00001
        </ContactItem>
        <ContactItem>
          <Phone />
          +1 001 0003 0003
        </ContactItem>
        <ContactItem>
          <Email />
          contact@avepaseosbt@dev.com
        </ContactItem>
        <Payment src="https://i.postimg.cc/jd851bQD/6220ac7d912013c51947f9c6.png" />
      </Right>

    </Container>
  )
}

export default Footer