import React, { useContext } from "react";
import styled from "styled-components";
import { ScrollView, View, TouchableOpacity } from "react-native";
import { Text } from "../../components/typography/text.component";

import { Spacer } from "../../components/spacer/spacer.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

const Item = styled.View`
  padding: 10px;
  padding-bottom: 0px;
  max-width: 120px;
  align-items: center;
`;

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

export const FavouritesBar = ({ favourites, goToDetails }) => {
  if (!favourites.length) {
    return null;
  }

  return (
    <FavouritesWrapper>
      <Spacer variant="left.large">
        <Text style={{ paddingLeft: 10 }} variant="caption">
          Favourites
        </Text>
      </Spacer>
      <ScrollView horizontal showHorizontalScreenIndicator={false}>
        {favourites.map((restaurant) => {
          return (
            <Spacer position="left" size="medium" key={restaurant.name}>
              <TouchableOpacity
                onPress={() => goToDetails("RestaurantDetail", { restaurant })}
              >
                <Item>
                  <View>
                    <CompactImage source={{ uri: restaurant.photos[0] }} />
                    <Text
                      variant="caption"
                      style={{ textAlign: "center" }}
                      numberOfLines={3}
                    >
                      {restaurant.name}
                    </Text>
                  </View>
                </Item>
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
