import {useParams, Link} from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function SessionsPage({setMovie}){
    const idobj = useParams();
    const idfilme = idobj.idFilme;
    const [sessions, setSessions] = useState([]);
    const [movieInfo, setMovieInfo] = useState({});
    

    useEffect(()=>{  
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idfilme}/showtimes`)
        
        .then(resposta => {
            setSessions(resposta.data.days);
            setMovieInfo({
                title: resposta.data.title,
                overview: resposta.data.overview,
            });
        })
    
        .catch(() => {
          console.log('deu errado, sessions');
       });

      },[]);
  
    return(
        <PageContainer>
            Selecione o horário
            <ul>
                {sessions.map(session=>(
                    <SessionContainer key={session.id}>
                         {session.weekday} - {session.date} 
                        <Line></Line>
                        <ButtonsContainer>
                            {session.showtimes.map(showtime =>
                                <Link 
                                    key={showtime.id}
                                    to={`/assentos/${showtime.id}`}
                                    onClick={()=>{
                                        const movie = {
                                            ...movieInfo,
                                            weekday: session.weekday,
                                            date: session.date,
                                        };
                                        setMovie(movie);
                                    }}
                                >
                                    <button>{showtime.name}</button>
                                </Link>
                            )}
                        </ButtonsContainer>
                    </SessionContainer>
                ))}
            </ul>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    width: 375px;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding-top: 70px;
`
const SessionContainer = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 23px 18px;
    padding: 20px;
    border-radius: 8px;

    div a button{
        background-color: #2B2D36;
    }
`
const Line = styled.div`
    margin-top: 18px;
    width: 302px;
    height: 2px;
    background-color: #4E5A65;
`

const ButtonsContainer = styled.div`
    width: 302px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 20px 0;

    button{
        width: 84px;
        height: 41px;
        border-radius: 4px;
        border: 2px;
        color:#EE897F;
        border: 2px solid #EE897F;
    }

    a{
        text-decoration: none;
    }
`
