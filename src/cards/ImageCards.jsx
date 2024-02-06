import { View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../../styles/styles";

const ImageCards = ({ source }) => {
  return (
    <View>
      <Image style={styles.tinyLogo} source={{ uri: source }} />
    </View>
  );
};

export default ImageCards;
