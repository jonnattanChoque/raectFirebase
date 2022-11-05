import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home, About, Blog, Header, Post, Error404} from './components';
import styled from 'styled-components';

const App = () => {
  return (
    <BrowserRouter>
      <MainContainer>
        <Header />
        <Main>
          <Routes>
            <Route path='*' element={ <Error404 /> } />
            <Route path='/' element={ <Home /> } />
            <Route path='/blog' element={ <Blog /> } />
            <Route path='/post/:id' element={ <Post /> } />
            <Route path='/about' element={ <About /> } />
          </Routes>
        </Main>
      </MainContainer>
    </BrowserRouter>
  )
}

export default App

const MainContainer = styled.div`
  width: 90%;
  padding: 40px;
  max-width: 700px;
`;
const Main = styled.main`
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(129,129,129,0.1);
`;