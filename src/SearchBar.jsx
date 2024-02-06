import { SafeAreaView, TextInput, Pressable, Text } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../styles/styles";
import uiConstants from "../constants/uiConstants";

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
      <Pressable style={styles.searchButton} onPress={onPressSearchCallback}>
        <Text style={styles.searchButtonText}>{uiConstants.Layout.SEARCH}</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default SearchBar;
