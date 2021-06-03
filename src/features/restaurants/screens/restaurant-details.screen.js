import React from "react";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { View, ScrollView } from "react-native";
import { List } from "react-native-paper";

export const RestaurantDetailsScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="coffee" />}
          id="1"
          theme={{ colors: { primary: "#f87a47" } }}
        >
          <List.Item title="Omelette" />
          <List.Item title="Oatmeal" />
          <List.Item title="Corn Flakes" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          id="2"
          theme={{ colors: { primary: "#f87a47" } }}
        >
          <List.Item title="Poha" />
          <List.Item title="Rajma" />
          <List.Item title="Pulao" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="pasta" />}
          id="3"
          theme={{ colors: { primary: "#f87a47" } }}
        >
          <List.Item title="Dal Makhani" />
          <List.Item title="Chicken Tikka Masala" />
          <List.Item title="Butter Chicken" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="glass-mug-variant" />}
          id="4"
          theme={{ colors: { primary: "#f87a47" } }}
        >
          <List.Item title="Coke" />
          <List.Item title="Pepsi" />
          <List.Item title="Limca" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
