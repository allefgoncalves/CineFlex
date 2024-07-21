import { Navigate, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function HomePage(){
  const [filmes, setfilmes] = useState([]);

  useEffect(()=>{  
    const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies"); 

    promise.then(resposta => {
      setfilmes(resposta.data);
      console.log(resposta.data);
    });

    promise.catch(() => {
      console.log('deu errado filmes');
   });

  },[]);

  return(
    <PageContainer>
      Em cartaz
      <ListContainer>
        {filmes.map(filme=>(
          <MovieContainer key={filme.id}>
            <Link to={`/sessoes/${filme.id}`}>
              <img 
                src={filme.posterURL} 
                alt={filme.title}
                onClick={()=>Navigate("/sessoes/:idFilme")}
              />
            </Link>
          </MovieContainer>
        ))}
      </ListContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
    text-align: center;
    margin-top: 65px;
    padding-top: 25px;
`
const ListContainer = styled.ul`
    width: 355px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`
const MovieContainer = styled.li`
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
    img {
        width: 145px;
        height: 210px;
        border-radius: 8px;
    }
`