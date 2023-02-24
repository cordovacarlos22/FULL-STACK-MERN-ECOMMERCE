import styled from 'styled-components'
import React from 'react'
import { categoriesitems } from '../data';
import CategoryItem from './CategoryItem';

//! category  container
const Container = styled.div`
 display:flex; 
 padding:20px;
 justify-content:space-between;
`  

//! categories main render
function Categories() {
   
  return (
        <Container>
          {categoriesitems && categoriesitems.map(item => (
            <CategoryItem img={item.img} title={item.title} button={item.button} key={item.id} />
          ))}
      </Container>
        )
};

export default Categories
