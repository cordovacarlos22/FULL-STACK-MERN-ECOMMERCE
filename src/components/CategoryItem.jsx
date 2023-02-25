import React from 'react';
import styled from 'styled-components';
//! category item container
const Container = styled.div`
  flex:1;
  margin:3px;
  height:70vh;
  position:relative;
`

const Image = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
`

const Info = styled.div`
   position:absolute;
   width:100%;
   height:100%;
   top:0;
   left:0;
   display:flex;
   align-items:center;
   justify-content:center;
   flex-direction:column;
`

const Title = styled.h1`
 color:white;
 margin:20px;
`
const Button = styled.button`
 border:none;
 padding:10px;
 background-color:white;
 color:gray;
 cursor:pointer;
 font-weight:600px;
 transition: all 0.5s  ease;

 &:hover{
  transform: scale(1.1)
 }

`




//!category item render
const CategoryItem = (item) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <h1 className='text-white text-xl font-ex bg-blue-700 p-1 m-1 rounded-sm'>{item.title}</h1>
        <button className='bg-white rounded-md p-1 text-slate-700 '>Shop Now</button>
      </Info>
    </Container>
  )
};

export default CategoryItem