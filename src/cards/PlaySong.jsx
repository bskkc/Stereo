import { View, Text, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { Audio } from "expo-av";
import styles from "../../styles/styles";
import uiConstants from "../../constants/uiConstants";

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
        // Eğer zaten bir şarkı çalınıyorsa, önceki sesi durdur ve boşalt
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
      <Pressable style={styles.playStopButtons} onPress={onPressPlay}>
        <Text style={styles.playStopButtonsText}>
          {uiConstants.Layout.PLAY}
        </Text>
      </Pressable>
      {playing && (
        <Pressable style={styles.playStopButtons} onPress={onPressStop}>
          <Text style={styles.playStopButtonsText}>
            {uiConstants.Layout.STOP}
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default PlaySong;
