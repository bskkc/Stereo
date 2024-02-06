import React, { useState, useEffect, useRef } from "react";
import { View, SafeAreaView, FlatList, Dimensions } from "react-native";
import searchSongs from "../helpers/searchSongs";
import SongCards from "./cards/SongCards";
import styles from "../styles/styles";
import Loading from "./Loading";
import SearchBar from "./SearchBar";

const Layout = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("rihanna");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const { width } = Dimensions.get("window");
  const columns = width <= 600 ? 2 : 3;
  const flatListRef = useRef(null);

  useEffect(() => {
    loadSongs();
  }, [page]);

  const loadSongs = () => {
    setLoading(true);

    searchSongs({
      searchQuery: searchText,
      page,
      limit: 12,
    })
      .then((response) => {
        setSongs((prevSongs) => [...prevSongs, ...response.data.results]);
        setTotal(response.data.total);
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
    setSongs([]);
    loadSongs();
  };

  const onEndReached = () => {
    if (songs.length < total) {
      setLoadingMore(true);
      setPage(page + 1);
    }
  };

  const onScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const paddingToBottom = 20;
    if (layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom) {
      onEndReached();
    }
  };

  const onPressSinger = (primaryArtists) => {
    // navigation.navigate("SingerScreen");
  };

  if (loading && page === 1) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        handleSearchCallback={handleSearch}
        searchText={searchText}
        onPressSearchCallback={onPressSearch}
      />
      <FlatList
        ref={flatListRef}
        style={styles.flatListContainer}
        data={songs}
        numColumns={columns}
        renderItem={({ item }) => (
          <View style={styles.songCards}>
            <SongCards
              title={item.name}
              image={item.image[1].link}
              songUrl={item.downloadUrl[4].link}
              primaryArtists={item.primaryArtists}
              year={item.year}
              playCount={item.playCount}
              album={item.album.name}
              onPressSingerCallback={onPressSinger}
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        onScroll={onScroll}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loadingMore ? <Loading /> : null}
      />
    </SafeAreaView>
  );
};

export default Layout;
