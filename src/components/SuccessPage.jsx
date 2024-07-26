import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';


export default function SuccessPage({data, movie}){

    const Navigate = useNavigate();    

    return(
        <PageContainer>
            <p>Pedido finalizado!</p>
            <Content>
                <Section>
                    <h2>Filme e sessão</h2>
                    <Line></Line>
                    <p>{movie.title}</p>
                    <p>{movie.date} às {movie.hour}</p>
                </Section>

                <Section>
                    <h2>Ingressos</h2>
                    <Line></Line>
                    {data.ids.map(id =>
                        <p>Assento {id}</p>
                    )}
                </Section>

                <Section>
                    <h2>Comprador(a)</h2>
                    <Line></Line>
                    <p>Nome: {data.name}</p>
                    <p>Cpf: {data.cpf}</p>
                </Section>
            </Content>
            <Button  onClick={()=>{Navigate("/");}}>Voltar para tela inicial</Button>
        </PageContainer>
    );
}

const Button = styled.button`
    align-self: center;
    padding: 10px 20px;
    margin-top: 4px;
    border: none;
    border-radius: 8px;
    background-color: #EE897F;
    cursor: pointer;
    width: 338px;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: Sarala;
    font-size: 18px;
    font-weight: 700;
    line-height: 29.35px;
    letter-spacing: 0.04em;
    text-align: center;
    color: #2B2D36;
`;

const Line = styled.div`
    width: 100%;
    height: 0px;
    border: 1px solid #4E5A65;
    margin:0px;
`

const PageContainer = styled.div`
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
    text-align: center;
    margin-top: 65px;
    padding-top: 25px;

    >p {
        font-family: Sarala;
        font-size: 24px;
        font-weight: 400;
        line-height: 39.13px;
        letter-spacing: 0.04em;
        text-align: center;
        color: #9DB899;
    }
`
const Content = styled.div`
    padding: 18px;
    margin:18px;
    width: 81%;
    height: 421px;
    border-radius: 8px;
    background: #2B2D36;
      div, p, h2 {
        background: #2B2D36;
    }
`
const Section = styled.div`
    margin-bottom: 19px;
    display: flex;
    flex-direction: column;

     h2 {
        color: #EE897F;
        font-family: Sarala;
        font-size: 22px;
        font-weight: 700;
        line-height: 35.87px;
        letter-spacing: 0.04em;
        text-align: left;
    }
    
    p{
        text-align: left;
        font-family: Sarala;
        font-'size: 20px;
        font-weight: 400;
        line-height: 32.61px;
        letter-spacing: 0.04em;
    }
`
