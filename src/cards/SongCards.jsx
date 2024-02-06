import { View, Pressable, Text } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../../styles/styles";
import ImageCards from "./ImageCards";
import PlaySong from "./PlaySong";
import uiConstants from "../../constants/uiConstants";

const SongCards = ({
  title,
  image,
  songUrl,
  year,
  primaryArtists,
  playCount,
  album,
  onPressSingerCallback,
}) => {
  const truncatedTitle = title.length > 30 ? title.slice(0, 30) + "..." : title;

  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{truncatedTitle}</Text>
      <ImageCards source={image} />
      <PlaySong songUrl={songUrl} />
      <Pressable onPress={() => onPressSingerCallback(primaryArtists)}>
        <Text style={styles.listItemSingerText}>{primaryArtists}</Text>
      </Pressable>
      <View style={styles.horizontalLineView}>
        <View style={styles.horizontalLine} />
        <View>
          <Text style={styles.horizontalLineText}>
            {uiConstants.Layout.DETAILS}
          </Text>
        </View>
        <View style={styles.horizontalLine} />
      </View>

      <Text style={styles.listItemDetail}>
        {uiConstants.Layout.ALBUM}
        {album}
      </Text>
      <Text style={styles.listItemDetail}>
        {uiConstants.Layout.YEAR}
        {year}
      </Text>
      <Text style={styles.listItemDetail}>
        {uiConstants.Layout.NUMBER_OF_PLAY}
        {playCount}
      </Text>
    </View>
  );
};

export default SongCards;
