import styled from 'styled-components';

export default function Cadeiras(props){
    return(
        <SeatsContainer>
            {props.seatslocal.map(seat=>(
            seat.isAvailable?(
                <SeatItem
                    backgroundColor={props.selecionados.includes(seat.id)?'#9DB899':'#FADBC5'} 
                    borderColor = {props.selecionados.includes(seat.id)?'#808F9D':'#EE897F'}
                    key={seat.id}
                    onClick={()=>props.selecionar(seat.id)}
                >
                    {seat.name}
                </SeatItem>
            ):(
                <SeatItem
                backgroundColor='#2B2D36'
                borderColor = '#2B2D36'
                key={seat.id}
            >
                {seat.name}
            </SeatItem>
            )))}
        </SeatsContainer>
    );
}

const SeatsContainer = styled.ul`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`
const SeatItem = styled.li`
    border: 2px solid ${props=>props.borderColor};  
    background-color: ${props=>props.backgroundColor};
    color: #2B2D36;
    height: 26px;
    width: 26px;
    border-radius: 26px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`