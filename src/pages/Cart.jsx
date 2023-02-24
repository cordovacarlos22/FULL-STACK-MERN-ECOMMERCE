import React from 'react'
import NavBar from '../components/Navbar';
import Announcement from '../components/Annoncement';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Add, Remove } from '@mui/icons-material';


const Container = styled.div`
   
`;

const Wrapper = styled.div`
 padding:20px;

`;



const Title = styled.h1`
 font-weight:300;
 text-align:center;
`;

const Top = styled.div`
 display:flex;
 align-items:center;
 justify-content:space-between;
 padding:20px;
`;

const TopButton = styled.button`
 padding:10px;
 font-weight:600;
 cursor:pointer;
 border: ${props => props.type === "filled" && "none"};
 background-color: ${props => props.type === "filled" ? "black" : "transparent"};
 color:${props => props.type === "filled" && "white"};
 border-radius:10px;
`;

const TopTexts = styled.div`
 
`;

const TopText = styled.span`
 text-decoration:underline;
 cursor:pointer;
 margin: 0px 10px;

`;






const Bottom = styled.div`
  display:flex;
  justify-content:space-between;
`;

const Info = styled.div`
 flex:3;
`;



const Product = styled.div`
 display:flex;
 justify-content:space-between;
`;

const ProductDetail = styled.div`
 flex:2 ;
 display:flex;
 
`;

const Image = styled.img`
 width:200px;
 height:200px;
 border-radius:10px;

`;

const Details = styled.div`
 padding : 20px;
 display:flex;
 flex-direction:column;
 justify-content:space-around;
`;

const ProductName = styled.h5``;

const ProductId = styled.span``;

const ProductColor = styled.div`
 width:20px;
 height:20px;
 border-radius:50%;
 background:${props => props.color};

`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
 flex:1;
 display:flex;
 align-items:center;
 justify-content:center;
 flex-direction:column;

`;

const ProductAmountContainer = styled.div`
  display:flex;
  align-items:center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
 font-size:24px;
 margin:5px;

`;

const ProductPrice = styled.div`
 font-size:30px;
 font-weight:200;
`;


const Hr = styled.hr`
 background-color :#eee;
 border:none;
 height:1px;
 margin 10px 0px;


`;

const Summary = styled.div`
 flex:1;
 border : 0.5px solid lightgray;
 border-radius:10px;
 padding:20px;
 height:50vh;

`;

const SummaryTitle = styled.h1`
 font-weight:300;

`;

const SummaryItem = styled.div`
 margin: 30px 0px;
 display:flex;
 justify-content:space-between;
 font-weight:${props => props.type === "total" && "500"};
 font-size: ${props => props.type === "type" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrce = styled.span``;
const SummaryButton = styled.button`
 width:100%;
 padding:10px;
 background-color:black;
 color:white;
 font-weight:600px;
 cursor:pointer;

`;

const Cart = () => {
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your WishList(0)</TopText>
          </TopTexts>
          <TopButton type='filled'>Check Out Now</TopButton>
        </Top>
        <Bottom>
          <Info>Info
            <Product>
              <ProductDetail>
                <Image src="https://interactive.wired.com/www-wired-com__2016__09__nike-self-lacing-design-hyperadapt/ff_nike-vapormax_front_angle-1.jpg.7" />
                <Details>
                  <ProductName><b>Product:</b>Jessie Thunder Shoes</ProductName>
                  <ProductId><b>Id:</b>12345</ProductId>
                  <ProductColor color="black" />
                  <ProductSize><b>Size:</b>9.5</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://img.ltwebstatic.com/images2_pi/2019/04/11/15549720522369514997_thumbnail_900x1199.webp" />
                <Details>
                  <ProductName><b>Product:</b>Notch Collar Colorblock Striped Shirt </ProductName>
                  <ProductId><b>Id:</b>12346</ProductId>
                  <ProductColor color="blue" />
                  <ProductSize><b>Size:</b>XL</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrce>$ 80</SummaryItemPrce>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping Cost</SummaryItemText>
              <SummaryItemPrce>$ 5</SummaryItemPrce>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrce>$ -5</SummaryItemPrce>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrce>$ 80</SummaryItemPrce>
            </SummaryItem>
            <SummaryButton>Check Out Now</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />

    </Container>
  )
}

export default Cart
