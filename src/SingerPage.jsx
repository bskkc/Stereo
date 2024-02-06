import React, { useState, useEffect } from "react";
import { View, SafeAreaView, FlatList } from "react-native";
import searchSongs from "../helpers/searchSongs";
import searchSinger from "../helpers/searchSinger";
import SongCards from "./cards/SongCards";
import styles from "../styles/styles";
import Loading from "./Loading";
import SearchBar from "./SearchBar";
import SingerCards from "./cards/SingerCards";

const SingerPage = () => {
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("rihanna");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const [singerData, setSingerData] = useState([]);

  useEffect(() => {
    loadSinger();
  }, []);

  const loadSinger = () => {
    setLoading(true);

    searchSinger({
      searchQuery: primaryArtists,
    })
      .then((response) => {
        setSingerData(response.data);
      })
      .finally(() => {
        setLoading(false);
        setLoadingMore(false);
      });
  };

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const onPressSearch = () => {
    setPage(1);
    setSingerData([]);
    loadSinger();
  };

  if (loading && page === 1) {
    return <Loading />;
  }

  return (
    <SafeAreaView>
      <SearchBar
        handleSearchCallback={handleSearch}
        searchText={searchText}
        onPressSearchCallback={onPressSearch}
      />
      <FlatList
        style={styles.flatListContainer}
        data={songs}
        numColumns={3}
        renderItem={({ item }) => (
          <View style={styles.songCards}>
            <SingerCards title={item.name} image={item.image[1].link} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default SingerPage;
