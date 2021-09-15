import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';
import fakeRestaurant from '../../assets/restaurante-fake.png';
import Skeleton from '../Skeleton';

const stars = {
  count: 5,
  activeColor: '#ffe928',
  isHalf: true,
  edit: false,
};

export const RestaurantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars {...stars} value={restaurant.rating} />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </RestaurantInfo>
      <RestaurantPhoto
        imageLoaded={imageLoaded}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : fakeRestaurant}
        onLoad={() => setImageLoaded(true)}
      />
      {!imageLoaded && <Skeleton width="100px" height="100px" />}
    </Restaurant>
  );
};
