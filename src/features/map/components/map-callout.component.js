import React from "react";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { Platform, View } from "react-native";
import WebView from "react-native-webview";

const Item = styled.View`
  padding: 10px;
  align-items: center;
  padding: 0px;
`;

const CompactImage = styled.View`
  border-radius: 10px;
  width: 100px;
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
        <Text
          variant="caption"
          numberOfLines={3}
          style={{ textAlign: "center" }}
        >
          {restaurant.name}
        </Text>
      </View>
    </Item>
  );
};
