import React from "react";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { Platform, View } from "react-native";
import WebView from "react-native-webview";

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const CompactImage = styled.View`
  border-radius: 10px;
  width: 100px;
  height: 100px;
`;

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 100px;
  height: 100px;
`;

const isAndroid = Platform.OS === "android";
export const MapCallout = ({ restaurant }) => {
  const Image = isAndroid ? CompactWebView : CompactImage;

  return (
    <Item>
      <View>
        <Image source={{ uri: restaurant.photos[0] }} />
      </View>
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
