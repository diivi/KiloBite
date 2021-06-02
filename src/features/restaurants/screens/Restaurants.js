import React, { useContext } from "react";
import { FlatList, View, StatusBar, SafeAreaView, Text } from "react-native";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import { InfoCard } from "../components/InfoCard";
import styled from "styled-components/native";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { v4 as uuid } from "uuid";
import { SearchComponent } from "../components/SearchComponent";

const RestaurantView = styled(SafeAreaView)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  flex-direction: column;
  flex: 1;
`;

export const Restaurants = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <RestaurantView>
      {isLoading ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator
            animating={true}
            size={50}
            color={Colors.orange500}
          />
          <Text style={{ fontSize: 18, paddingTop: 24 }}>Loading...</Text>
        </View>
      ) : (
        <>
          <SearchComponent />
          <FlatList
            data={restaurants}
            renderItem={({ item }) => {
              return <InfoCard restaurant={item} />;
            }}
            keyExtractor={(item) => uuid()}
            contentContainerStyle={{ padding: 16 }}
          />
        </>
      )}
    </RestaurantView>
  );
};
