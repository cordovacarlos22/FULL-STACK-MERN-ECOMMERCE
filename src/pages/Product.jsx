import React from 'react'
import styled from 'styled-components'
import Annoncement from '../components/Annoncement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Newsletter } from '../components/Newsletter'

const Container=styled.div`
`
const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Annoncement/>
      <Wrapper>
        <ImgContainer>
        <img src='$' alt="product"></img>
        <InfoContainer>
          <Title>
            Denim Jumpsuit
          </Title>
          <Desc>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ipsam sunt ipsa vitae placeat harum dignissimos tempora asperiores ullam porro cupiditate, quas sit ratione laudantium voluptatibus cum dolore mollitia. Nam ipsum aspernatur pariatur placeat voluptate, eos temporibus debitis quasi molestias.
          </Desc>
          <Price>
            $20
          </Price>

        </InfoContainer>
        </ImgContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product