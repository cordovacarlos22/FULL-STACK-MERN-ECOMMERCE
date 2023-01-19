import {FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
 flex:1
 margin:5px;
 margin-bottom:20px;
 width:380px;
 height:350px;
 display:flex;
 justify-content:center;
 align-items:center;
 background-color:#f5fbfb;

 

`

const Circle = styled.div`
  width:300px;
  height:300px;
  border-radius:50%;
  background-color:white;
  position:absolute;
  


`

const Img = styled.img`
height:100%;
z-index:2;
`


const Info= styled.div`
 z-index:2;
`


const Icon = styled.div`


`
const Product = ({item}) => {
  return (
    <Container>
      <Circle/>
      <Img src={item.img}/>
      <Info>
        <Icon>
          <ShoppingCartOutlined/>
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
