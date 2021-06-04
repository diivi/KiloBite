import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { API_KEY } from "@env";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import { Navigation } from "./src/infrastructure/navigation/index";

import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "kilobyte-1cf5e.firebaseapp.com",
  projectId: "kilobyte-1cf5e",
  storageBucket: "kilobyte-1cf5e.appspot.com",
  messagingSenderId: "1037812741720",
  appId: "1:1037812741720:web:ecdef47044ad5629a0fc2d",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
          <ExpoStatusBar style="auto" />
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}
