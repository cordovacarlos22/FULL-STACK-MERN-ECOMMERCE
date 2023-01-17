import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
background-color:teal;
color:white;
height:30px;
display:flex;
align-items:center;
justify-content:center;
font-size:1.2em;
font-weight:500;
`
const Annoncement = () => {
  return (
    <Container>
      Super Deal ! Free Shipping on All Order Over $50
    </Container>
  )
}

export default Annoncement