import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function InputDados({ selecionados, setData }){
    const [name, setName] = useState("");
	const [cpf, setCpf] = useState("");
    const Navigate = useNavigate();

    function reserva(event){
        event.preventDefault();

        const requisicao = {
            ids: selecionados,
            name: name,
            cpf: cpf
        };

        axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",requisicao)

        .then((e) => {
            setData(requisicao);
            Navigate("/sucesso");
        })
        .catch(error => console.log(error));
    }

    return(
        <FormContainer>
            <form onSubmit={reserva}>
                <Label htmlFor="name">
                    Nome do Comprador:
                    <input 
                        id="name" 
                        value={name} 
                        onChange = {e => setName(e.target.value)}
                        placeholder = "Digite seu nome..." 
                    />
                </Label>
                <Label htmlFor="cpf">
                    CPF do Comprador:
                    <input 
                        id="cpf"
                        value={cpf}
                        onChange = {e => setCpf(e.target.value)} 
                        placeholder = "Digite seu CPF..."
                    />
                </Label>
                <Button type="submit">Reservar Assento(s)</Button>
            </form>
        </FormContainer>
    );
}

const FormContainer = styled.div`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;

    label, input {
        font-size: 16px;
        font-family: Sarala;
        font-weight: 400;
        line-height: 26.09px;
        text-align: left;
    }

    input {
        width: calc(100vw - 60px);
        margin: 0px auto;
        padding: 10px;
        border: 1px solid #D4D4D4;
        border-radius: 8px;
        font-size: 16px;
        height: 18px;
        background: #FFFFFF;

        font-family: Roboto;
        font-style: italic;
        color: #000000;
    }
`;

const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 11px;
    align-items: flex-start;
`;

const Button = styled.button`
    align-self: center;
    padding: 10px 20px;
    margin-top: 36px;
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