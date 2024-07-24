import Homepage from './components/Homepage.jsx';
import SessionsPage from './components/SessionsPage/SessionsPage.jsx';
import SeatsPage from './components/SeatsPage/SeatsPage.jsx';
import SuccessPage from './components/SuccessPage.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from 'styled-components';
import ClapperBoard from '../public/clapperboard.png';
import { useState } from 'react';


export default function App() {

  const [data, setData] = useState([]);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavContainer><img src={ClapperBoard}/>CINEFLEX</NavContainer>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path={`/sessoes/:idFilme`} element={<SessionsPage />}></Route>
        <Route path={`/assentos/:idSessao`} element={<SeatsPage setData={setData}/>}></Route>
        <Route path={`/sucesso`} element={<SuccessPage data={data}/>}></Route>
      </Routes>    
    </BrowserRouter>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&family=Sarala:wght@400;700&display=swap');
    margin: 0;
    padding: 0;
    background-color: #212226;

    font-family: Sarala;
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    color:#FFFFFF;
    font-family: 'Sarala', sans-serif;
  }
  body{
    width: 375px;
  }
  html{
    display: flex;
    justify-content: center;
  }
`;

const NavContainer = styled.div`
  width: 375px;
  height: 65px;
  display: flex;
  justify-content: center;
  line-height: 65px;
  background-color: #EE897F;
  color:#FADBC5;
  font-family: 'Raleway', sans-serif;
  font-size: 34px;
  position: fixed;
  top: 0px;
  margin: 0px auto; 
  a {
      text-decoration: none;
      color: #E8833A;
  }
  img{
    width: 40px;
    height: 40px;
    background-color: rgba(255, 0, 0, 0);
    margin: 11px 15px; 
  }
`

