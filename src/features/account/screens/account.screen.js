import React from "react";
import { LottieView } from "lottie-react-native";

import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AnimationWrapper
} from "../components/account.styles";



export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AnimationWrapper>
          <LottieView
            key="animation"
            autoPlay
            loop
            resizeMode="cover"
            source={require("../../../../assets/khaana.json")}
          />
        </AnimationWrapper>

        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("login")}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => navigation.navigate("register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
