import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'

import { getsliderslist } from "../services/slider.service";
const Container = styled.div`
  padding:20px;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
`

const Products = ({ cat, filters, sort }) => {
  // console.log(cat,filters,sort)

  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  

  const showSlides = async () => {
    const response = await getsliderslist();
    console.log(response);
      

  };

  useEffect(() => {
    showSlides();
    console.log(showSlides())
  }, [cat]);
  return (
    <Container>
      {popularProducts && popularProducts.map(item => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  )
}

export default Products
