import { View, Pressable, Text } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../../styles/styles";
import ImageCards from "./ImageCards";

const SingerCards = ({ title, image }) => {
  const truncatedTitle = title.length > 30 ? title.slice(0, 30) + "..." : title;

  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{truncatedTitle}</Text>
      <ImageCards source={image} />
    </View>
  );
};

export default SingerCards;
