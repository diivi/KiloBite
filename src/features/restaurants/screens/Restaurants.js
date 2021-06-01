import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { InfoCard } from "../components/InfoCard";
import styled from "styled-components/native";

const RestaurantView = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
  flex-direction: column;
`;

const ListView = styled(View)`
  flex: 1;
  background-color: blue;
  padding: 20px;
`;

const SearchView = styled(View)`
  background-color: #fff;
  padding: 20px;
  ${StatusBar.currentHeight &&
  `padding-top: ${StatusBar.currentHeight + 20}px`};
`;

export const Restaurants = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <RestaurantView>
      <SearchView>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchView>
      <ListView>
        <InfoCard />
      </ListView>
    </RestaurantView>
  );
};
