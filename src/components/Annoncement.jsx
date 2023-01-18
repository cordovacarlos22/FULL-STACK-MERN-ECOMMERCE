import React from 'react'
import styled from 'styled-components'
//! annaucement main container  span for nav bar  css 
const Container = styled.div`
background-color:#CD0404;
color:white;
height:35px;
display:flex;
align-items:center;
justify-content:center;
font-size:1.5em;
font-weight:500;
`

//! annaucement main component 
const Annoncement = () => {
  return (
    <Container>
     FREE STANDARD SHIPPING ON ORDER  OF $50+
    </Container>
  )
}

export default Annoncement