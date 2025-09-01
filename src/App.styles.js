import styled from "styled-components";


export const Container = styled.div`
max-width: 500px;
margin: 0 auto;
padding: 20px;
background-color: #F1EBE5;
border-radius: 12px;
box-shadow: 0 4px 12px rgba(0,0,0,0.1);
font-family: Arial, sans-serif;
`;


export const Title = styled.h1`
text-align: center;
margin-bottom: 20px;
color: #B8B99E;
font-size: 26px;
`;


export const Form = styled.form`
display: flex;
gap: 10px;
margin-bottom: 20px;
`;


export const Input = styled.input`
flex: 1;
padding: 10px;
border: 1px solid #DCDDC8;
border-radius: 6px;
background-color: #FFF;
`;


export const ButtonStyled = styled.button`
padding: 10px 14px;
border: none;
background-color: #E4D3C5;
color: #333;
border-radius: 6px;
cursor: pointer;
transition: background-color 0.2s;
&:hover {
background-color: #FCE6D6;
}
`;


export const Lista = styled.ul`
list-style: none;
padding: 0;
`;


export const Item = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #FFF;
padding: 12px;
margin-bottom: 10px;
border-radius: 6px;
box-shadow: 0 2px 6px rgba(0,0,0,0.08);
`;


export const Span = styled.span`
cursor: pointer;
font-size: 16px;
text-decoration: ${props => props.marcado ? 'line-through' : 'none'};
color: ${props => props.marcado ? '#888' : '#000'};
`;