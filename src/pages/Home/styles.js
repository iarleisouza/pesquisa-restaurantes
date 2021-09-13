
import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
flex-direction: row;


`;

export const Container = styled.aside`
//background-color: black;
background-color: ${(propos) => propos.theme.colors.background};
width: 360px;
height: 100vh;
overflow-y: auto;

`;

export const Search = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
background: #fff;
padding: 16px;
`;

export const Logo = styled.img`
width: 200px;
margin: 0 0 15px 50px;

`;

export const Map = styled.div`

background: red;
width: 500px
`;

