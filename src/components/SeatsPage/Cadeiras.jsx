import styled from 'styled-components';

export default function Cadeiras({ seatslocal, selecionados, selecionar }){
    return(
        <SeatsContainer>
            {seatslocal.map(seat=>(
            seat.isAvailable?(
                <SeatItem
                backgroundColor={selecionados.some(item => item.id === seat.id) ? '#9DB899' : '#FADBC5'}
                borderColor={selecionados.some(item => item.id === seat.id) ? '#808F9D' : '#EE897F'}
                key={seat.id}
                    onClick={()=>selecionar(seat.id, seat.name)}
                >
                    {seat.name}
                </SeatItem>
            ):(
                <SeatItem
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
    border: 2px solid;  
    border-color: ${props => props.borderColor || '#2B2D36'};
    background-color: ${props=>props.backgroundColor || '#2B2D36'};
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