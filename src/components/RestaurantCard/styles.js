import styled from 'styled-components'

export const Restaurant = styled.div`
display: flex;
justify-content: space-betwen;
cursor: pointer;
margin-top: 5px;
padding: 16px;
background: #fff;
border-left: 5px solid transparent;
:hover {
    border-left-color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.background};
}

`;

export const RestaurantInfo = styled.div`
display: flex;
flex-direction: column;
`;


export const Title = styled.span`
font-family: ${(props) => props.theme.fonts.regular};
color: ${(props) => props.theme.colors.text};
font-size:24px;
font-weight: bold;
line-height: 29px;
margin: 0px 0 10px 0;
`;

export const Address = styled.span`
font-family: ${(props) => props.theme.fonts.regular};
color: ${(props) => props.theme.colors.text};
font-size: 16px;
line-height: 19px;
margin: 10px 0 10px 0;

`;

export const RestaurantePhoto = styled.img`
width: 100px;
height: 100px;
border-radius: 6px;

`;