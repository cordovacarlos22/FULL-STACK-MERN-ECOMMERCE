import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Annoncement from '../components/Annoncement'
import { Newsletter } from '../components/Newsletter';
import Footer from '../components/Footer';


const Container = styled.div`

`
const Wrapper = styled.div`
padding:50px;
display:flex;

`
const ImgContainer = styled.div`
flex:1;

`

const Image = styled.img`
  width:100%;
  height:90vh;
  object-fit:cover;
`
const InfoContainer = styled.div`
 flex:1;
 padding: 0px 50px;
`

const Title = styled.h1`
 font-weight 200;

`

const Desc = styled.p`
  margin:20px 0px;
`

const Price = styled.span`
  font-weight:100;
  font-size:40px;
`

const FilterContainer = styled.div`
 display:flex;
 justify-content:space-between;
`
const Filter = styled.div`

`
const FilterTitle = styled.span`

`

const FilterColor = styled.div`

`

const FilterSize = styled.select
  `
`

const FilterSizeOption = styled.option`

`

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Annoncement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://images.unsplash.com/photo-1552664199-fd31f7431a55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3456&q=80" alt='product'></Image>
        </ImgContainer>
        <InfoContainer>
          <Title>Lorem, ipsum.</Title>
          <Desc>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolores odio illo optio quae cumque minus animi beatae, sint sequi nostrum consequatur temporibus accusantium vero. Recusandae, maxime in eligendi aliquam totam sint modi, molestiae quisquam culpa pariatur aperiam rerum sequi!
          </Desc>
          <Price>$20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"></FilterColor>
              <FilterColor color="darkblue"></FilterColor>
              <FilterColor color="gray"></FilterColor>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product
