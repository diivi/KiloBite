import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

import { Restaurants } from "./src/features/restaurants/screens/Restaurants";

export default function App() {
  return (
    <>
      <Restaurants />
      <ExpoStatusBar style="auto" />
    </>
  );
}
