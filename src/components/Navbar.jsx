import Badge from '@mui/material/Badge';
import React from 'react';
import styled from 'styled-components';
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';

//! nav main container
const NavContainer = styled.div
  `
`;
//! nav bar wrapper container
const NavWrapper = styled.div
  `
  display:flex;
  justify-content:space-between;
  padding 10px 30px;
  align-items:center;
`;
//! nav bar left components
const NavLeft = styled.div
  `
display:flex;
align-items:center;
flex:1; //! sets even part for nav-left, nav-center && nav-right
`;
//! UI LANGUAGE
const Lang = styled.span`
  font-size:14;
  cursor:pointer;
`;
//! div container for search 
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  margin-left:20px;
  padding:0 10px;
  display:flex;
  align-items:center;
  border-radius:20px;
`

//! div container for input 
const Input = styled.input`
  border:none;
  margin:10px;
  padding:3px;
 `

//! nav bar center components
const NavCenter = styled.div
  `
flex:1; //! sets even part for nav-left, nav-center && nav-right
text-align:center;
`;

const Logo = styled.h1`
font-weight:bold;

  
`


//! nav bar right components 
const NavRight = styled.div
  `
  display:flex;
  justify-content:flex-end;
  gap:15px;
  flex:1; //! sets even part for nav-left, nav-center && nav-right
`;
//! menu item  register,sign in & cart icon 
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
`;

// const ExpressShipping = styled.div`
//  color:#CD0404;
//  font-weight:bold;
//  font-size:12px;
// `



const Navbar = () => {
  //! sets id 
  let counterIdNav = 20;
  counterIdNav++

  return (
    <NavContainer id ={counterIdNav++}>
      <NavWrapper id={counterIdNav++}> 
        <NavLeft id={counterIdNav++}>
          <Lang>EN</Lang>
          <SearchContainer>
            <Input placeholder='search'></Input>
            <SearchOutlined></SearchOutlined>
          </SearchContainer>
        </NavLeft>
        <NavCenter id={counterIdNav++}>
          <Logo> AVE PASEOS BOUTIQUE</Logo>
        </NavCenter>
        <NavRight id={counterIdNav++}>
          {/* <ExpressShipping><span>FREE EXPRESS SHIPPING</span> ON ORDER  OF +129</ExpressShipping> */}
          <MenuItem id={counterIdNav++}>Register</MenuItem>
          <MenuItem id={counterIdNav++}>Sign in</MenuItem>
          <MenuItem id={counterIdNav++}>
            <Badge id={counterIdNav++} badgeContent={4} color="primary">
              <ShoppingCartOutlined></ShoppingCartOutlined>
            </Badge>
          </MenuItem>
        </NavRight>
      </NavWrapper>
      <hr></hr>
    </NavContainer>
  )
}

export default Navbar;