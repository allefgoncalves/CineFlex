import {useParams, Navigate, Link} from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import InputsDados from "./InputDados";
import Cadeiras from './Cadeiras.jsx';

export default function SeatsPage(){
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
            console.log("resposta ok");       
        });

        promise.catch(() => {
          console.log('erro, prommise cath seats');
       });

    },[]);

    function selecionar(id){        
        if(selecionados.includes(id)){
            setSelecionados(selecionados.filter(numero => numero !== id));
        }else{
            setSelecionados([...selecionados, id]);
        }
    }
   
    return(
        <PageContainer onSubmit="salvarDados">
            <text>Selecione o(s) assento(s)</text>
            <Cadeiras
                seatslocal={seatslocal} setseatslocal={setseatslocal}
                selecionar={selecionar} 
                selecionados={selecionados}                 
            />
            <line></line>
            <InputsDados />
        </PageContainer>
    );
}

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

    text{
        width: 375px;
        height: 78px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
        
    line{
        width: 302px;
        height: 0px;
        border: 1px solid #4E5A65;
        margin:38px auto 24px;

    }
`

