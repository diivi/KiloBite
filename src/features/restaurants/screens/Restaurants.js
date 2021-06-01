import React from "react";
import { FlatList, View, StatusBar, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { InfoCard } from "../components/InfoCard";
import styled from "styled-components/native";

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

  return (
    <RestaurantView>
      <SearchView>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchView>
      <FlatList
        data={[
          { name: "1" },
          { name: "2" },
          { name: "3" },
          { name: "4" },
          { name: "5" },
          { name: "6" },
          { name: "7" },

          { name: "8" },

          { name: "9" },
        ]}
        renderItem={() => <InfoCard />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </RestaurantView>
  );
};
