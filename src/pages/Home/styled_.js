import Slider from 'react-slick';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  background: black;
  height: 100vh;
`;

export const Container = styled.aside`
  background: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    background: transparent;
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.asideThumb};
    border-radius: 20px;
  }
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 16px;
  border-radius: 4px;
`;

export const Logo = styled.img`
  margin-bottom: 16px;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin: 0 16px;
  }
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 0;
`;

export const ModalTitle = styled.p`
  margin-bottom: 10px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  line-height: 29px;
  font-size: 24px;
  font-weight: bold;
`;

export const ModalContent = styled(ModalTitle)`
  line-height: 19px;
  font-size: 16px;
  font-weight: normal;
`;
