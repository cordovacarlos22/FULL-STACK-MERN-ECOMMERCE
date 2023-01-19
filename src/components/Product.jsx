import {FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
 flex:1
 margin:5;
 min-width:280px;
 height:350px;
 display:flex;
 align-content:center;
 align-items:center;

`

const Circle = styled.div`

`

const Img = styled.img`

height:100%;
`


const Info= styled.div`
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
