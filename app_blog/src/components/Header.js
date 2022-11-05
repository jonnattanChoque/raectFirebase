import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = () => {
  return (
    <HeaderContainer>
        <Title>Mi blog personal</Title>
        <Menu>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/about">Acerca de</NavLink>
        </Menu>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 26px;
  margin-bottom: 10px;
  texttransform: uppercase;
`;

const Menu = styled.nav`
  a {
    text-decoration: none;
    color: #165168;
    margin: 0 10px;
  }
  a:hover {
    color: #191668;
  }
  a.active {
    border-bottom: 2px solid #165168;
    padding-bottom: 5px;
  }
`;