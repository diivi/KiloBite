import React from "react";
import { Text, View, StatusBar } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled(Text)`
  padding-top: 10px;
  font-size: 24px;
`;

const RestaurantCard = styled(Card)`
  background-color: #fff;
`;

const CardCover = styled(Card.Cover)`
  padding: 10px;
  background-color: white;
`;

export const InfoCard = ({ restaurant = {} }) => {
  const {
    name = "Moti Mahal Deluxe",
    icon,
    photos = [
      "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    ],
    address = "random city random place random random",
    isOpenNow = true,
    rating = 4.5,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <RestaurantCard>
      <Card elevation={5}>
        <CardCover key={name} source={{ uri: photos[0] }} />
        <Card.Content>
          <Title>{name}</Title>
        </Card.Content>
      </Card>
    </RestaurantCard>
  );
};
