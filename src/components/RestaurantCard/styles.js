import styled from 'styled-components';

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 5px;
  padding: 16px;
  background: #ffffff;
  border-left: 5px solid transparent;
  border-radius: 4px;

  &:hover {
    background: ${(props) => props.theme.colors.backgroundContrast};
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
`;

export const Address = styled.span`
  margin: 10px 0;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  line-height: 19px;
`;

export const RestaurantPhoto = styled.img`
  display: ${(props) => (props.imageLoaded ? 'block' : 'none')};
  height: 100px;
  width: 100px;
  border-radius: 6px;
  object-fit: cover;
`;
