import { View, Text, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { Audio } from "expo-av";
import styles from "../../styles/styles";
import { AntDesign } from "@expo/vector-icons";

const PlaySong = ({ songUrl }) => {
  const [sound, setSound] = useState(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  const onPressPlay = async () => {
    try {
      if (playing) {
        await sound.stopAsync();
        await sound.unloadAsync();
      }

      if (songUrl) {
        const { sound: newSound } = await Audio.Sound.createAsync(
          { uri: songUrl },
          { shouldPlay: true }
        );
        setSound(newSound);
        setPlaying(true);
      }
    } catch (error) {
      console.error("Error while playing the sound:", error.message);
    }
  };

  const onPressStop = async () => {
    try {
      if (sound) {
        await sound.stopAsync();
        await sound.unloadAsync();
        setSound(null);
        setPlaying(false);
      }
    } catch (error) {
      console.error("Error while stopping the sound:", error.message);
    }
  };

  return (
    <View>
      {!playing ? (
        <AntDesign
          style={styles.playStopButtons}
          name="play"
          size={32}
          onPress={onPressPlay}
        />
      ) : (
        <AntDesign
          style={styles.playStopButtons}
          name="pausecircle"
          size={32}
          onPress={onPressStop}
        />
      )}
    </View>
  );
};

export default PlaySong;
