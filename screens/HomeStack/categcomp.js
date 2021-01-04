import React from "react";
import { Text,Animated, Dimensions, StyleSheet, View, } from "react-native";

export const{height,width}=Dimensions.get("window")

export const CARD_WIDTH = width * 0.8;
export const CARD_HEIGHT1 = CARD_WIDTH *(228 / 362);
export const MARGIN = 16;
export const CARD_HEIGHT = CARD_HEIGHT + MARGIN * 2;
const wheight = height - 64;
const styles = StyleSheet.create({
  card: {
    marginVertical: MARGIN,
    alignSelf: "center",
  },
});


export default  WalletCard = ({ type, y, index }) => {
  const position = Animated.subtract(index * CARD_HEIGHT, y);
  const isDisappearing = -CARD_HEIGHT;
  const isTop = 0;
  const isBottom = wheight - CARD_HEIGHT;
  const isAppearing = wheight;
  const translateY = Animated.add(
    Animated.add(
      y,
      y.interpolate({
        inputRange: [0, 0.00001 + index * CARD_HEIGHT],
        outputRange: [0, index * CARD_HEIGHT],
        extrapolateRight: "clamp",
      })
    ),
    position.interpolate({
      inputRange: [isBottom, isAppearing],
      outputRange: [0, -CARD_HEIGHT / 4],
      extrapolate: "clamp",
    })
  );
  const scale = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: "clamp",
  });
  const opacity = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
  });
  return (
    <Animated.View
      style={[styles.card, { opacity, transform: [{ translateY }, { scale }] }]}
      key={index}
    >
       <View style={{width:CARD_WIDTH,height:CARD_HEIGHT1,backgroundColor:"green"}}></View>
    
    </Animated.View>
  );
};