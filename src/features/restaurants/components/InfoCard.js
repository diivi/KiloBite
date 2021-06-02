import React from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  padding-top: ${(props) => props.theme.space[2]};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  padding-top: ${(props) => props.theme.space[1]};
  font-size: ${(props) => props.theme.fontSizes.button};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

const CardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  padding-top: 0px;
`;

const Rating = styled(View)`
  padding-top: ${(props) => props.theme.space[0]};
  padding-bottom: ${(props) => props.theme.space[0]};
  flex-direction: row;
  height: 20px;
`;

const Section = styled(View)`
  flex-direction: row;
  align-items: center;
  padding-top: ${(props) => props.theme.space[0]};
  padding-bottom: ${(props) => props.theme.space[0]};
`;
const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const InfoCard = ({ restaurant = {} }) => {
  const {
    name = "Moti Mahal Deluxe",
    icon = "http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
    photos = [
      "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    ],
    vicinity = "Random city random place random random",
    isOpenNow = true,
    rating = 4.5,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.round(rating)));

  return (
    <RestaurantCard>
      <Card elevation={5}>
        <CardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Title>{name}</Title>
          <Section>
            <Rating>
              {ratingArray.map(() => (
                <SvgXml key={uuid()} xml={star} width={20} hright={20} />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily ? (
                <Text style={{ color: "red", fontSize: 10 }}>
                  CLOSED TEMPORARILY
                </Text>
              ) : null}
              <SvgXml
                xml={open}
                width={20}
                height={20}
                style={{ marginLeft: 10 }}
              />
              <Image
                style={{ width: 15, height: 15, marginLeft: 10 }}
                source={{ uri: icon }}
              />
            </SectionEnd>
          </Section>
          <Address>{vicinity}</Address>
        </Info>
      </Card>
    </RestaurantCard>
  );
};
