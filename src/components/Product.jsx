import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
 z-index:15;
 width:100%;
 height:100%;
 position:absolute;
 top:0;
 left:0;
 background-color:rgba(0,0,0,0.2);
 opacity: 0;
 z-index:20;
 display:flex;
 align-items:center;
 justify-content:center;
 transition: all 0.2s  ease;
 cursor:pointer;
  border-radius:10px;

`
const Container = styled.div`
 display:flex;
 margin:5px;
 margin-bottom:20px;
 width:380px;
 height:350px;
 display:flex;
 justify-content:center;
 align-items:center;
 background-color:lightgray;
 position:relative;
 border-radius:10px;
  &:hover ${Info}{
    opacity:1;
  }
 
`

const Circle = styled.div`
  width:270px;
  height:270px;
  border-radius:50%;
  background-color:white;
  position:absolute;
  


`

const Img = styled.img`
height:100%;
z-index:2;
`





const Icon = styled.div`
 width:50px;
 height:50px;
 border-radius:50%;
 display:flex;
 align-items:center;
 justify-content:center;
 margin:10px;
 background-color:white;
 transition: all 0.2s  ease;


  &:hover{
    background-color:#e9f5f5;
    transform: scale(1.1);
  }
`
const Product = ({ item }) => {

  
  return (
    <Container>
      <Circle />
      <img className='w-2/4 z-10' src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>

    </Container>
  )
}

export default Product
