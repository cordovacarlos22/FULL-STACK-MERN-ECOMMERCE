import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { sliderItems } from '/Users/carloscordova/Desktop/ecommerce-v1/ecommerce-1/ecommerce-1/src/data.js';
// ! main container for slider component
const SliderMainContainer = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  position:relative;
  overflow:hidden;
`;
//!! container for arrow 
const Arrow = styled.div`
  display:flex;
  border-radius:50%;
  align-items:center;
  justify-content:center;
  position:absolute;
  top:0;
  bottom:0;
  margin:auto;
  width:75px;
  height:75px;
  left:${props => props.direction === "left" && "10px"};
  right:${props => props.direction === "right" && "10px"};
  background-color:#fff7f7;
  cursor:pointer;
  opacity:0.5;
  z-index:2;
  color:black;
  `;
//! wrapper for slider 
const SliderWrapper = styled.div`
  height:100%;
  display:flex;
  transition: all 1.5s ease;
  transform:translateX(${props => props.slideIndex * -100}vw);
  

  `
//! slider  container  div 
const SlideContainer = styled.div`
  display:flex;
  width:100vw;
  height:100vh;
  text-align:center;
  align-items:center;
  background-color:#${props => props.bg}
  `
//! slider img container div 
const SliderImgContainer = styled.div`
  height:100%;
  flex:1;
  `
//! slider img  
const SliderImg = styled.img`
    height:80%;
   margin-top:15px;
`
//! slider info container  div 
const SliderInfoContainer = styled.div`
  flex:1;
  padding:50px;
  
  `
//! slider info title  h1 
const SliderTitle = styled.h1`
 font-size:70px;

`
//! slider info description  p 
const SliderParagraph = styled.p`
  margin:50px 0px;
  font-size:20px;
  font-weight:500;
  letter-spacing:3px;
`
//! slider info button  
const SliderButton = styled.button`
  padding:10px;
  font-size:20px;
  background-color:transparent;
  cursor:pointer;
`

//! slider main function 
function Slider() {
  //! sets id 
  let counterId = 0;
  counterId++

  const [slideIndex, setSlideIndex] = useState(0);

  //! handles arrow click depending on the direction  click (left or right)
  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <SliderMainContainer key={counterId++}>
      <Arrow id={counterId++} direction="left" onClick={() => handleClick("left")}>
        <ArrowLeft />
      </Arrow>
      <SliderWrapper key={counterId++}  slideIndex={slideIndex}>
        {sliderItems && sliderItems.map((item) => (
          <SlideContainer key={counterId++} bg={item.bg}>
            <SliderImgContainer id={counterId++}>
              <SliderImg key={counterId++} src={(`${item.img}`)}></SliderImg>
            </SliderImgContainer >
            <SliderInfoContainer key={counterId++}>
              <SliderTitle key={counterId++}>{item.title}</SliderTitle>
              <SliderParagraph key={counterId++}>{item.desc}</SliderParagraph>
              <SliderButton key={counterId++}>Shop Now</SliderButton>
            </SliderInfoContainer>
          </SlideContainer>
        ))};
      </SliderWrapper>
      <Arrow id={counterId++} direction="right" onClick={() => handleClick("right")}>
        <ArrowRight />
      </Arrow>
    </SliderMainContainer>
  )
}

export default Slider;