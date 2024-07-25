import {useParams} from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import InputsDados from "./InputDados";
import Cadeiras from './Cadeiras.jsx';

export default function SeatsPage({setData}){
    const idobj = useParams();
    const idsession = idobj.idSessao;
    const [seatslocal, setseatslocal] = useState([]);
    const [filme, setfilme] = useState([]);
    const [selecionados, setSelecionados] =useState([]);
        
    useEffect(()=>{  

        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idsession}/seats`);     
        
        promise.then(resposta => {filme, setfilme
            setseatslocal(resposta.data.seats);
            setfilme(resposta.data);      
        });

        promise.catch(() => {
          console.log('erro, prommise cath seats');
       });

    },[]);

    function selecionar(id, name) {
        if (selecionados.some(item => item.id === id)) {
            setSelecionados(selecionados.filter(item => item.id !== id));
        } else {
            setSelecionados([...selecionados, {id, name}]);
        }
    }

   
    return(
        <PageContainer>
            <p>Selecione o(s) assento(s)</p>
            <Cadeiras
                seatslocal={seatslocal} setseatslocal={setseatslocal}
                selecionar={selecionar} 
                selecionados={selecionados}                 
            />
            <Line></Line>
            <InputsDados
                selecionados={selecionados}
                setData={setData} 
            />
        </PageContainer>
    );
}

const Line = styled.div`
    width: 302px;
    height: 0px;
    border: 1px solid #4E5A65;
    margin:30px auto 24px;
`

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #293845;
    margin-top: 65px;
    padding-bottom: 120px;

    font-family: Sarala;
    font-size: 24px;
    font-weight: 400;
    line-height: 39.13px;
    letter-spacing: 0.04em;
    text-align: center;
    color:#FFFFFF;

    p{
        width: 375px;
        height: 78px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

