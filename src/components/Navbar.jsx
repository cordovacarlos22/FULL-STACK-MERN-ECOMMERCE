import Badge from '@mui/material/Badge';
import React from 'react';
import styled from 'styled-components';
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
//! nav main container
const NavContainer = styled.div
  `
  over-flow:hidden;
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
  margin-left:25px;
  display:flex;
  align-items:center;
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

//! UI LANGUAGE
const Author = styled.span`
  font-size:14;
  cursor:pointer;
`;
//! nav bar right components
const NavRight = styled.div
  `
  display:flex;
  justify-content:flex-end;
  gap:15px;
  flex:1; //! sets even part for nav-left, nav-center && nav-right
`;

const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
`;



const Navbar = () => {
  return (
    <NavContainer>
      <NavWrapper> 
        <NavLeft>
          <Lang>EN</Lang>
          <SearchContainer>
            <Input placeholder='search'></Input>
            <SearchOutlined></SearchOutlined>
          </SearchContainer>
        </NavLeft>
        <NavCenter>
          <Logo>Ecommerce MERN-Strack.</Logo>
          <Author>By: Carlos Cordova</Author>
        </NavCenter>
        <NavRight>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign in</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
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