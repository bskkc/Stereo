import { SafeAreaView, TextInput, Pressable, Text } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../styles/styles";
import uiConstants from "../constants/uiConstants";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = ({
  handleSearchCallback,
  searchText,
  onPressSearchCallback,
}) => {
  return (
    <SafeAreaView style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder={uiConstants.Layout.SEARCH}
        onChangeText={handleSearchCallback}
        value={searchText}
      />

      <AntDesign
        style={styles.searchButton}
        name="search1"
        size={18}
        onPress={onPressSearchCallback}
      />
    </SafeAreaView>
  );
};

export default SearchBar;
