import React, { useContext } from "react";
import { FlatList, View, StatusBar, SafeAreaView, Text } from "react-native";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import { InfoCard } from "../components/InfoCard";
import styled from "styled-components/native";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { v4 as uuid } from "uuid";

const RestaurantView = styled(SafeAreaView)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  flex-direction: column;
  flex: 1;
`;

const SearchView = styled(View)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
  ${StatusBar.currentHeight &&
  `padding-top: ${StatusBar.currentHeight + 16}px`};
`;

export const Restaurants = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <RestaurantView>
      <SearchView>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchView>
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
        <FlatList
          data={restaurants}
          renderItem={({ item }) => {
            return <InfoCard restaurant={item} />;
          }}
          keyExtractor={(item) => uuid()}
          contentContainerStyle={{ padding: 16 }}
        />
      )}
    </RestaurantView>
  );
};
