import { useParams, Navigate } from "react-router-dom";
import styled from 'styled-components';


export default function SuccessPage({data, movie}){
    
    console.log("data: ",data);
    console.log("movie: ",movie);

    return(
        <PageContainer>
            <p>Pedido finalizado!</p>
            <Content>
                <div>
                    <h2>Filme e sessão</h2>
                    <Line></Line>
                    <p></p>
                    <p></p>
                </div>

                <div>
                    <h2>Ingressos</h2>
                    <Line></Line>
                    {data.ids.map(id =>
                        <p>Assento {id}</p>
                    )}
                </div>

                <div>
                    <h2>Comprador(a)</h2>
                    <Line></Line>
                    <p>nome: {data.name}</p>
                    <p>Cpf: {data.cpf}</p>
                </div>
            </Content>
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
    font-size: 24px;
    text-align: center;
    margin-top: 65px;
    padding-top: 25px;
`
const Content = styled.div`
    background: #2B2D36;
`