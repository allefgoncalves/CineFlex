import styled from 'styled-components';

export default function InputDados(){
    
    return(
        <FormContainer>
            <form>
                <Label>
                    Nome do Comprador:
                    <input type="text" placeholder="Digite seu nome..." />
                </Label>
                <Label>
                    CPF do Comprador:
                    <input type="text" placeholder="Digite seu CPF..." />
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
    margin: 20px 0;

     label, input, button {
        font-size: 16px;
        font-family: Sarala;
        font-weight: 400;
        line-height: 26.09px;
        text-align: left;
    }

    input {
        width: calc(100vw - 60px);
        margin-top: 5px;
        margin-bottom: 15px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
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
    border: none;
    border-radius: 5px;
    background-color: #007BFF;
    color: white;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;